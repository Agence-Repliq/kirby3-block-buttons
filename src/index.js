import buttons from './components/buttons.vue';
import "./index.css";
panel.plugin("repliq/kirby3-block-buttons", {
    blocks: {
        buttons: buttons
    }
});