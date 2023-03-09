<template>
    <div class="k-block-buttons">
        <div class="k-block-buttons-group"  v-if="content.group.length">
            <button type="button" :class="item.class" v-for="(item, index) in buttons"
            :key="index"  @click="open" :title="item.message">
                    <k-icon type="info" v-if="item.error"/>
                    <span>{{item.label}}</span>
            </button>
        </div>
        <div @click="open" class="k-block-buttons-group"  v-else>
            <button type="button" class="empty" :title="$t('field.blocks.buttons.message.edit')">
                <k-icon type="add"/>
                <div>#########</div>
            </button>
        </div>
    </div>
    
</template>
<script>
    export default {
        computed: {
            buttons() {
                const buttons = [];
                this.content.group.forEach((element,index) => {
                    if(!element.linktopage.length && !element.url && !element.linkToFile.length ){
                        buttons[index] = {
                            "label": element.label,
                            "message": this.$t('field.blocks.buttons.message.error'),
                            "class": "error",
                            "error": true
                        };
                    }else {
                        buttons[index] = {
                            "label": element.label,
                            "linktopage": element.linktopage,
                            "url": element.url,
                            "message": this.$t('field.blocks.buttons.message.edit'),
                            "class": "",
                            "error": false
                        };
                    }

                });
                return buttons;
            }
        },        
    }
</script>
