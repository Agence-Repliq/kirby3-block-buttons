<template>
    <div class="k-block-buttons">
        <div class="k-block-buttons-group"  v-if="content.group.length">
            <button type="button" :class="item.class" v-for="(item, index) in buttons"
            :key="index"  @click="open" :title="item.message">
                    <span>{{item.label}}</span>
                    <k-icon type="alert" v-if="!item.type"/>
            </button>
        </div>
        <div @click="open" class="k-block-buttons-group-empty"  v-else>
            <button type="button" class="empty">
                    <k-icon type="edit"/>
                    <span>{{ $t('field.blocks.buttons.emptyState') }}</span>
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
                    if(!element.linktopage.length && !element.url ){
                        buttons[index] = {
                            "label": element.label,
                            "type":"",
                            "message":"Manque page ou url",
                            "class": element.type+" error"
                        };
                    }else {
                        buttons[index] = {
                            "label": element.label,
                            "linktopage": element.linktopage,
                            "url": element.url,
                            "type": element.type,
                            "message":"Éditer le bouton",
                            "class": element.type
                        };
                    }

                });
                return buttons;
            }
        },        
    }
</script>
