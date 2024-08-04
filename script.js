// const h2 = React.createElement('h2',{className:'subheading'}, 'Hello React')

// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subheading",
//         children: "Hello React"
//     }
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         children: [
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type: "p",
//                 ref: null,
//                 props: {
//                     children: "Hello React"
//                 }
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type: "span",
//                 ref: null,
//                 props: {
//                     children: "Hello React"
//                 }
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type: "button",
//                 ref: null,
//                 props: {
//                     children: "Hello React"
//                 }
//             },
//         ]
//     }
// })

/* 
 New Line --------------------------
*/

// const h2 = React.createElement('div',{className:'container', id : 'contaciner'}, 'Hello React')


/* const h2 = React.createElement('div', { className: 'container', id: 'contaciner' },
    [
        React.createElement('section', { key: 1 },
            [
                React.createElement('p', { key: 3 }, "Hello"),
                React.createElement('img', { key: 5, src: "data:image/png;base64,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" })
                , React.createElement('img', { key: 6, src: "data:image/png;base64,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" })
            ]
        )
    ]
)


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(h2) */

    // const h2 = <h2>Hello JSX</h2>

    // const h2 =  <div className="container" id = "contaciner" > 
    // <section>
    //  <p>Hello</p>
    //  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAilBMVEUiIiJh2vti3f5j4P8cAABk4v8aAABl5f8hHh0XAABm5/8hHRsgGhgiICAfEgwgFxQdBgAeDABd0O9n6v9by+c+eotf1vQwUVtQrMU2Ym9Km7EmLzItSFAkKixVutVDiZw5b35NpLwzWmVYw+AqP0YnNjsfEhJHlKcgGx4jJSkjKTA7dYE3aXQuTFlNhSbFAAAKNUlEQVR4nO1cWXujuBJFEmJHLEZstsVunG7P//97twqceMvM7Yd7uz8zOg/pBJG0VZSqzimVMAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY1fRyCEiJy/H3ciuMH/fZ/nj0JYY3WpDoElvh0OE8soqku/t6Lf/MH+CNy+HDKAqovvDGLGVa1wfKgP1u//dL8bbpPTFSRXvRs8jkZuq3JyHc/k5u3h1owS5u08TmHWeflxP+PQnQa0A+VwA/yTb90eZptTwgdZtXVqM0I4zPjLQSJr5gxsYWdzW8mUE5b138eXjcDfK0Z445pJbLmFQg/xyikKccw5HQaPgEt0o2sliel2nPDu4x8S0NvDlClM0V1/EG41EErsoRdgD//cZhyMUR7cNaM4Z8Xopt0jjDpGWPjFKGIxZ7B20laEwbHJYSyT7tf8ox48SW442wajYrw0bxf8uFIQWUljftSYT9R9bl3urvfbXS2iH6gt790/TA4lo5Q1kHBoXu/vx5xjzZkag+e/shnEbUq94tH9xYSWIISwvPl4HAokp9lhu6sllpBJxicxEv2Yc7AGTaXx5AiitWn613bNYUpCvOlZm0WWAnOQznpeFqLlhPRbNgfkkRdzuDNZveOZgooWSNmGzRGDOV68w2oI8nWgHG38OIKLhRQbNgdQ9KfYEZ4gvBJbzkDJh+L0cLv4ue3YsWSWR++P+gHIVu2eS0bsx6wa+g2nw4YzyyvviEYFbgHMLJpAzdi1f0e6nOO8bd4RHRSz5+R2wfmowTfUHtaPKMBNmLynrPuS8e4l8m4HOEGmbjN2TkBEYD1YJsCqMgio/W00GAfGZ2O7JN0QHaMEJ+wL07IsUUAYJZ2UsmngSwnUNPtIYCAWYIToL7JtCWeYDSG7EOZ7LOTcKZUxYBxpmiPSNEWqPqiya9rCgJsqj5DLhgW+kUBq4Y0shywFYk4XrfKE5WKeZkMnQcwMG6YdvuUWGUyW0ZshuOd5u93yBb/ym1EoeA5Te9cM//Tn/j8gdKJ432Q2vU6WMbZ827VVfziMgMOhr9oSVw8MfhqM2YM8JcHGwmkYOD8q5YExlknmsBKqAPQcVa6ZiGiFEInpppSml33VlFl+9RPb64of/pbYR+CPMtstygQmyTrTtUzrkFOaH54iZdLbsEImy3LdD+BlOe7JwIJS7RRshX+EYpLDsq2SqroFcjFYWBguKWHNyz6K1XFC5yAEMQOmKGU35Lgxw1S730ZQdYIKyBfMaKjbyXRrcI9CgNbPKRuszzD5Rc79fbrWz5NqR3LpmqPsMrAly7si/rv/4o3gn2WGe0mqKSIzANmSE1pbAUoUXqxLJbKS/TE21/AQSQ6S7ui4atVvkelXMzoXH9r335MLT3MO2ixrDibuphihiavFQT7mdcv0QmtsSqXKZlr4ubMvOc2rJGSUlTH+ipNExZyD0gNn+ZNT+V/AmiFp8q4IotsFkrejYjRfxKqTyAFWEmO5qhaDRRfItOUZxH3+KehCYfTgTTR/d/+IKw65oTGiLy4VGDaBEMmIt8iRMGnW5Isb2BUuHudY27COwImym3xzomOH9vjrrTl76BLcRDHvk6QLz5mkhA6Lc5gt+WLqNB3RQqJC8gE/1/e+ECw5R1nvzFFNCa5Quw9TEP0O5263+KCDqfzk5XhtdkJ0mHnhpvljISx0cYG1ifG+cAdw+eMTYXDTRY0sziH69E7G0fQHLo+4H1DZqKfAKSZYLt0bRw9HAAktn9NBAi5D6FojFK19L2evZXazRnO8bN6jcZV439US7HNK5ufnGRwhCAwr5xA/vXtz7NbKqInVdeI+T9wtGVXH95Vzi3d0L96BHpGvZa4X78DJhqearNz1EYt3RO/rHcsEhuk5dmDNg19jR5U/xI6lfUH0eAd9XmVifPPYYVgNPPzZfPBvUWDLE2E/0Ur+Q2bx5jBEkTMvhYB8fLCjb5X0dafureCgLAVyeW8PECPAO0C/TYt7tDf3YGmxZhugYBA86APv8C2Ir1Sd3jd0AMzLDvshzVv1xncgkJYN6JglejjRzK72YLTFwOB81JzYPRK1u00okazx5J1ph4ESBezBu/NXxdNqkEwdBjDCeRVoDcOWSubllyWJih40izrDMkvbz00X38LdOrJ7+z7T0JphHjb9eRb+YhEs/2XCaiix66ui/WgGEHDytEzeP0I0YVWcoLRZbwjEj6Xh1H5/RQvho4HoQHfZZQqjAALprd7hXXOOb7mAa4CJIPWu9Q6G9Y4QpPAocw8V3uXdfQPhmJXCDg4vbYrJ+ayGWY/VsC/4E0pZrIZdPKyGGWM/k6UhWx3M7/78+8Gc5oGis5Oy6VHFWA5k0xLbOl5rpbVHGNZKgxPYoKwaxWxstVQyfGttf4/ILNAgMC2OlfRyMkzTLVDGj8+V9AJV/GiZ8RGiLcnJ0qROVDOaW6mkI0RcNGUOGQTpZqq6WrZjjcwztswkEQuS2LROYIO0ObRNXapF61Jmp50c422U0W8QyQieT+h1ly3PhgFrGrX82V6qHlBdWik7hptSA5COlY2wHNbXPtmaMRCBCKcW1Ihtc3rbr04ReLpp+ea2a025DQlXVZO/2VNxoXnJqN205cB3ns3ZZ5H0C4tDMG57Ozp0bY1bC5sJoN/Awv4OIxHmabo03ZAuBuH2Fet2NUSWptqfTGFWkGCrDZsjFDVMGZMrME0TqNeEDtFUEDQghPQdKl24apkCMu3S/cPkhs2x9obdSfRIMsLue8P4nUYLxoHas/HG5Z7/guigKK/vnvfSOWiX2DkYLZ2D93vYWAvh5YY7BwU4wEtfKbaTgjTBOhAvz3e+sPm+0m+6jpdCIGvcEI+F/cu6jmOJPekPjzsUP3NKmZzxINzT6YTN96R/c57FOeOxa2zzSdvgMWwuZfYNtw5+e57FP9coZWjenJ/qoFs/z4KnneyXVBG4y2mn2nquCi+nnTbsHd8tFsNxm3WPpX0uBm3/eE9K7eIxcwYCX1KAp52ofBJrWz8p+co7wmjq8BxtXUKYYM3DZj/yDrpl3oHnpll5R9KDU6/w4H3tnrscpH93SJyHu3m34VPWeAafso/PJRHGe5nhaymAmgcfM9pjaP0va0U9aJhtH+AAHmZfu4GcOK5KyrBB8gQXgg9suGSk7uOlX9AInJLTdMtvaDCCSUHMlCZIWMupuhQWCi2LtYMlCCrsDmRD3QscD/BcWPfG7Ry/AKTpNC8bKWuFZ71Y2kyfHRuOGGfcfyCZmqVsFJ592nL1x1g6WTgWeXJ83xFhXnlw7jJHFBbq2smfL0RVvnNzy6/AOc07dj2ZsVPF+XG+TnS+DDu+1lA5l+/dvvArCK1JcY/bXlrvrdeH7wjz0OWezT3aHTeyC/nPiFxr7A/CfXkjw+e45RpFP/3t+PYQ/eMrB/FcqfjX2EJDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND4zfiP4Rxs2IbBBkRAAAAAElFTkSuQmCC"/>
    //  <img src="data:image/png;base64,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"/>
    //  </section>
    // </div>

    // console.log(h2)
    // const root = ReactDOM.createRoot(document.querySelector('#root'))

    // root.render(h2)


    // var data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    //   console.log(data)

//     axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })


// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

import axios from "axios"

var p = axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })