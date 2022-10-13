const circle_vertexShader = [
  "varying vec2 vUv;",
  "void main(){",
  "vUv = uv;",
  "	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
  "}"

].join('\n')

const circle_fragmentShader = [
  "varying vec2 vUv;",
  "uniform vec3 u_color;",
  "uniform float u_opacity;",
  "uniform float u_shadow;",
  "const float edge = 0.03;",
  "const float radius = 0.4;",
  `float getstep(float dis,float r ){
    float num = smoothstep(r - edge,r,dis ) - smoothstep(r, r+edge ,dis  );
    return num;
  }`,
  `float plot(float dis, float r){
    // 获得一个0.3透明度的圆
    float num = (1. - step(r,dis) ) * u_opacity;
    
    return num;
  }`,

  `void main(){
    float dis = distance(vUv, vec2(0.5));
    float t = plot(dis, radius);
    if( t > 0.0){
      gl_FragColor = vec4(u_color, t);
    } else {
      if(u_shadow > 0.0){
        float c = getstep(dis, radius) * u_shadow;
        gl_FragColor = vec4(0.0,0.0,0.0,c);
      }else{
        gl_FragColor = vec4(0.0);
      }
    }
    
  }`,
].join('\n')

// let temp_material = null

const pin_r = 2.5
const fixHeight = 0.2 // 高度修正 比例
function initChart (data) {
  // console.log('initChart')
  createCircle(10, 0x152247, 0.01, 0.4)

  createCircle(8.8, 0x152247, 0.05, 0.5, 0.25)

  createCircle(7.5, 0x193076, 0.1, 0.6, 0.35)

  let sum = data.reduce((acc, cur) => {
    return acc + cur.value
  }, 0)

  let group = new THREE.Group()

  let thetaStart = 0  // 起始角度为0度.

  for (let i = 0; i < data.length; i++) {
    // for (let i = 0; i < 1; i++) {
    const item = data[i];
    let pencent = item.value / sum
    let range = 360 * pencent // 角度.

    let thetaEnd = thetaStart + range * Math.PI / 180

    let c = createFanShaped(item.height, thetaStart, thetaEnd, item.color, item.name, item.value)

    c.name = item.name

    group.add(c)


    // 添加线段
    let line_r = pin_r * 0.8
    let middle = (thetaStart + thetaEnd) / 2
    let x = Math.cos(middle) * line_r
    let y = Math.sin(middle) * line_r

    let position = [x, y, item.height * fixHeight]

    let device = new DeviceView({
      position: position,
      domOffset: item.domOffset,
      scene: scene,
      camera: camera,
      raycaster: raycaster,
      name: item.name,
      value: item.value,
      color: item.fontColor
    })

    c.userData.device = device

    thetaStart = thetaEnd

  }

  // let c = createFanShaped(3, 0, 60 * Math.PI / 180, 0xff0000)
  // group.add(c)
  group.position.setZ(0.1)


  scene.add(group)
}

let temp_material = null

function createFanShaped (height, thetaStart, thetaEnd, color, name, value) {
  const r = pin_r

  let shape = new THREE.Shape()
  shape.lineTo(0, 0)
  shape.absarc(0, 0, r, thetaStart, thetaEnd)

  // 图形
  let shape3d = new THREE.ExtrudeBufferGeometry(shape, {
    depth: height * fixHeight,
    bevelEnabled: false
  })

  var material = new THREE.MeshPhongMaterial({ color: color });
  var circle = new THREE.Mesh(shape3d, material);

  circle.userData.pick = true // 需要拾取

  // let width = 0.1
  // let geometry = new THREE.BoxGeometry(width, width, width)

  // if (!temp_material) {
  //   temp_material = new THREE.MeshBasicMaterial({
  //     transparent: true,
  //     color: 0xff0000,
  //     opacity: 1.0
  //   })
  // }

  // let box = new THREE.Mesh(geometry, temp_material)

  // box.position.set(x, y, height * fixHeight)

  // circle.add(box)

  return circle

}

function createCircle (size, color, z, opacity, shadow) {
  let uniform = {
    u_color: { value: new THREE.Color(color) },
    u_opacity: { value: opacity || 0.5 },
    u_shadow: { value: shadow || 0 }
  }
  let planeGeometry = new THREE.PlaneBufferGeometry(size, size)
  let planeMaterial = new THREE.ShaderMaterial({
    vertexShader: circle_vertexShader,
    fragmentShader: circle_fragmentShader,
    side: THREE.DoubleSide,
    uniforms: uniform,
    transparent: true,
    depthWrite: false
  })

  let plane = new THREE.Mesh(planeGeometry, planeMaterial)

  plane.position.setZ(z)

  scene.add(plane)

}

(function (global) {
  // 组件的渲染管理
  let renders = []

  function addRender (func) {
    renders.push(func)
  }

  function removeRender (func) {
    for (let i = renders.length - 1; i >= 0; i--) {
      let render = renders[i]
      if (render === func) {
        renders.splice(i, 1)
      }
    }
  }

  function updateRender (delta) {
    for (let i = 0; i < renders.length; i++) {
      const render = renders[i];
      render(delta)
    }
  }

  global.randerManager = {
    addRender,
    removeRender,
    updateRender
  }
})(window);

(function (global) {

  let temp_material = null
  let elementBody = document.querySelector('.app')



  /**
   * 不含3d模型的基类
   * opt
   * position   Array [0,0,0]
   * scene      Scene
   * camera     Camera
   * raycaster  Raycaster
   * isTop     Boolean  是否总是显示
   * extData    any
   * @export
   * @class BaseElement
   */
  class BaseElement {

    constructor(opt) {
      this.render = this.render.bind(this)
      this._position = opt.position || [0, 0, 0]
      this._offset = opt.offset || [0, 0]
      this._scene = opt.scene
      this._camera = opt.camera
      this._raycaster = opt.raycaster
      this._isTop = !!opt.isTop
      this.__first_show = false

      // this._element = opt.element

      this._extData = opt.extData || null

      this._show = false

      this.__createInstance()
    }

    __createInstance () {
      let width = 0.01
      let geometry = new THREE.BoxGeometry(width, width, width)
      if (!temp_material) {
        temp_material = new THREE.MeshBasicMaterial({
          transparent: true,
          color: 0xff0000,
          opacity: 0.0
        })
        // temp_material.visible = false
      }
      this._instance = new THREE.Mesh(geometry, temp_material)
      // this._instance = new THREE.Object3D()
      this._instance.position.set(...this._position)

      this.__createElement()
      this.show()
    }

    __createElement () {
      let div = document.createElement('div')
      div.className = '__base_element_body'

      div.style.display = 'none'

      // div.addEventListener('contextmenu', this._onContextMenu)
      // div.addEventListener('wheel', e => {
      //   // console.log(e)
      //   console.log('element wheel')
      //   // e.preventDefault();
      // })


      elementBody.appendChild(div)
      this.__el = div
    }

    // _onContextMenu(e) {
    //   e.preventDefault()
    // }

    __updateElement (element) {
      element.style.position = 'absolute'
      element.style.left = this._offset[0] + 'px'
      element.style.top = this._offset[1] + 'px'
      this._element = element
      this.__el.innerHTML = ''
      this.__el.appendChild(element)
    }

    getElement () {
      return this._element || null
    }

    setOffset (offset) {
      this._offset = offset || [0, 0]
      if (this._element) {
        this._element.style.left = this._offset[0] + 'px'
        this._element.style.top = this._offset[1] + 'px'
      }
    }

    setPosition (position) {
      this._position = position
      this._instance.position.set(...position)
    }

    getExtData () {
      return this._extData
    }

    setExtData (data) {
      this._extData = data
    }

    getIsTop () {
      return this._isTop
    }

    setIsTop (bool) {
      this._isTop = !!bool
    }


    show () {
      if (!this._show) {
        this._show = true

        this._scene.add(this._instance)

        randerManager.addRender(this.render)
      }
    }

    hide () {
      if (this._show) {
        this.__first_show = false
        this._show = false
        this._scene.remove(this._instance)
        // elementBody.removeChild(this.__el)
        this.__el.style.display = 'none'
        randerManager.removeRender(this.render)
      }
    }

    destroy () {
      this.hide()
      this.__el.innerHTML = ''
      elementBody.removeChild(this.__el)
    }

    transformPixel () {
      let tempV = new THREE.Vector3()
      this._instance.updateWorldMatrix(true, false)
      this._instance.getWorldPosition(tempV)
      tempV.project(this._camera)
      const x = (tempV.x * .5 + .5) * elementBody.clientWidth
      const y = (tempV.y * -.5 + .5) * elementBody.clientHeight
      return [x, y]

    }

    render () {
      if (this._show) {
        // console.log('render')

        let tempV = new THREE.Vector3()
        this._instance.updateWorldMatrix(true, false)
        this._instance.getWorldPosition(tempV)
        tempV.project(this._camera)

        let isTop = this.getIsTop()
        let show = true
        if (!isTop) {
          let raycaster = this._raycaster
          raycaster.setFromCamera(tempV, this._camera)
          const intersectedObjects = raycaster.intersectObjects(this._scene.children)
          show = intersectedObjects.length && this._instance === intersectedObjects[0].object
        }

        const x = (tempV.x * .5 + .5) * elementBody.clientWidth
        const y = (tempV.y * -.5 + .5) * elementBody.clientHeight
        this.__el.style.left = `${x}px`
        this.__el.style.top = `${y}px`

        if (show) {
          if (this.__hidden_index) {
            clearTimeout(this.__hidden_index)
            this.__hidden_index = null
            // console.log('清除隐藏', new Date().getTime())
          }
          this.__el.style.display = 'block'
        } else {

          // console.log('hidden')
          if (!this.__hidden_index && this.__el.style.display !== 'none') {
            this.__hidden_index = setTimeout(() => {
              // console.log('隐藏', new Date().getTime())
              this.__hidden_index = null
              this.__el.style.display = 'none'
            }, 500);
          }
        }


        // this.__el.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`
      }
    }
  }


  class DeviceView extends BaseElement {
    constructor(opt) {
      super({
        ...opt,
        isTop: true,
        offset: [0, 0]
      })

      this._clickHandle = this._clickHandle.bind(this)
      this._initialize(opt)
      // this._bodyClick = this._bodyClick.bind(this)
    }

    _initialize (opt) {
      this.name = opt.name || '名称'
      this.value = opt.value || 0
      this.color = opt.color || '#fff'
      this._domOffset = opt.domOffset || [0, 30]

      this._click = opt.click

      this._createElement()
    }

    _createElement () {
      let body = document.createElement('div')
      body.className = '__device_view_body '
      let content = document.createElement('div')
      content.className = '__device_point_spot'

//   点
    content.style.top = this._domOffset[1] + 'px'
    content.style.left = this._domOffset[0] + 'px'
      body.appendChild(content)

      let window = document.createElement('div')
      window.className = '__device_point_window'
//字
      this._setWrapperStyle(window, this._domOffset, 20, 80)

      let span = document.createElement('div')
      span.className = 'name'
      span.innerText = this.name

      let number = document.createElement('div')
      number.className = 'number'
      number.innerText = this.value+'%'
      number.style.color = this.color


      window.appendChild(number)
      window.appendChild(span)

      let lines = createLine(this._domOffset)
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let lineDom = createLineDom(line)
        body.appendChild(lineDom)
      }

      // let spot = document.createElement('div')
      // spot.className = '__line_spot'
      // spot.style.top = this._domOffset[1] + 'px'
      // spot.style.left = this._domOffset[0] + 'px'

      body.appendChild(window)

      // body.addEventListener('click', this._clickHandle, false)

      super.__updateElement(body)

      return {
        body,
        window
      }
    }

    _setWrapperStyle (wrapper, offset, width, height) {
      const padding = 10
      let x = offset[0]
      let y = offset[1]

      wrapper.style.width = width + 'px'
      wrapper.style.height = height + 'px'
      if (y > 0) {  // 下方
        // wrapper.style.top = y + 'px'
        // wrapper.style.left = (-(width / 2) + x) + 'px'
        if (x > 0) {  // 左边
          wrapper.style.left = (x + padding) + 'px'
          wrapper.style.top = (y - height / 2) + 'px'
        } else if (x < 0) {  // 右边
          wrapper.style.left = (x - padding - width) + 'px'
          wrapper.style.top = (y - height / 2) + 'px'
        } else {
          wrapper.style.left = -(width / 2) + 'px'
          wrapper.style.top = (y + padding) + 'px'
        }
      } else if (y < 0) { // 上方
        // wrapper.style.bottom = -y + 'px'
        // wrapper.style.left = (-(width / 2) + x) + 'px'
        if (x > 0) {  // 左边
          wrapper.style.left = (x + padding) + 'px'
          wrapper.style.top = (y - height / 2) + 'px'
        } else if (x < 0) { // 右边
          wrapper.style.left = (x - padding - width) + 'px'
          wrapper.style.top = (y - height / 2) + 'px'
        } else {
          wrapper.style.left = -(width / 2) + 'px'
          wrapper.style.top = (y - height - padding) + 'px'
        }

      } else { // 平行
        if (x === 0) {  // x,y 都为0 放上面吧.
          wrapper.style.bottom = 0
          wrapper.style.left = -(width / 2) + 'px'
        } else if (x > 0) {
          wrapper.style.top = -(height / 2) + 'px'
          wrapper.style.left = x + 'px'
        } else {
          // x < 0
          wrapper.style.bottom = -(height / 2) + 'px'
          wrapper.style.right = -x + 'px'
        }
      }

    }

    setZIndex (zIndex) {
      let dom = this._dom
      let body = dom.body
      body.style.zIndex = zIndex
    }

    _clickHandle () {
      let extData = super.getExtData()
      typeof this._click === 'function' && this._click(extData)
    }



    destroy () {
      let dom = super.getElement()
      dom.removeEventListener('click', this._clickHandle, false)
      this.hide()
      super.destroy()
    }

  }

  global.BaseElement = BaseElement
  global.DeviceView = DeviceView

  function createLineDom ({ from, to }) {
    let x1 = from[0]
    let y1 = from[1]
    let x2 = to[0]
    let y2 = to[1]
    let line = document.createElement('div')
    line.className = '__window_line'
    line.style.left = x1 + 'px'
    // line.style.right = y1 + 'px'
    line.style.top = y1 + 'px'

    let length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    line.style.width = length + 'px'

    // 设置倾斜角度
    let angle = getAngle(x1, y1, x2, y2)

    line.style.transform = `rotate(${angle}deg)`

    return line

  }

  function createLine (offset) {

    let x = offset[0]
    let y = offset[1]

    // line1 : 1 / 4
    let x1 = x / 5 * 2
    // let y1 = y / 5 * 2

    let line1 = {
      from: [0, 0],
      to: [x1, y]
    }

    let line2 = {
      from: [x1, y],
      to: [x, y]
    }

    return [line1, line2]
  }


  function getAngle (px, py, mx, my) {
    var x = Math.abs(px - mx);
    var y = Math.abs(py - my);
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (z == 0) return 0;
    var cos = y / z;
    var radina = Math.acos(cos); //用反三角函数求弧度

    var angle = 180 * radina / Math.PI; //将弧度转换成角度
    //因为算出来的值是[0,90),需要转成[0,360)
    if (mx >= px) {
      if (my >= py) {
        angle = 90 - angle;
      } else {
        angle = 270 + angle;
      }
    } else {
      if (my >= py) {
        angle = 90 + angle;
      } else {
        angle = 270 - angle;
      }
    }
    return angle;

  }

})(window);