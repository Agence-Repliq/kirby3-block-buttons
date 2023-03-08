import {
    kirbyup
} from 'kirbyup/plugin'

window.panel.plugin('repliq/kirby3-block-buttons', {
    blocks: kirbyup.import('./components/blocks/*.vue')
})