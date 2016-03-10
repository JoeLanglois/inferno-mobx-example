import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';

import {autorun, observable} from 'mobx'

let NameStore = observable({
    name: 'Joe'
})


const HelloWorld  = () => {
    return <h1>Hello {NameStore.name}</h1>
}   

autorun(() => {
    InfernoDOM.render(
        <HelloWorld name={NameStore.name} />,
        document.body
    )
})

setTimeout(() => {
    NameStore.name = 'Adèle'
}, 1000)

autorun(() => {
    console.log("Name changed: " + NameStore.name)
})
