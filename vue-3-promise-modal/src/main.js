import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { PromiseDialog } from "vue3-promise-dialog";

let app = createApp(App);
app.use(PrimeVue);
app.use(PromiseDialog);
app.component("ButtonComponent", Button);
app.component("InputText", InputText);
app.mount('#app')