import TopOperation from './components/TopOperation'

const components = [
    TopOperation
];

export default {
    install(Vue, options) {
        components.map(component => {
            Vue.component(component.name, component);
        })
    }
}
