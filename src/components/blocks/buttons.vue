<template>
    <div>
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
<style lang="scss" scoped>
    .k-block-buttons-group {
        display: flex;
        align-items: center;
        @media only screen and (max-width: 600px) {
           flex-direction: column;
           align-items: flex-start;

        }
    }
    .k-block-buttons-group-empty .k-icon {
          margin-right: var(--spacing-2);
    }
    .k-icon {
        margin-left: var(--spacing-2);
    }
    button + button {
        margin-left: var(--spacing-4);
        @media only screen and (max-width: 600px) {
           flex-direction: column;
           align-items: flex-start;
           margin-left: 0;
           margin-top: var(--spacing-4);

        }
    }
    button {
        display: flex;
        align-items: center;
        border-radius: var(--rounded);

    }
     button.empty {
            padding: var(--spacing-2) var(--spacing-4);
            background: var(--color-gray-100);
     }

    button.primary {
        padding: var(--spacing-2) var(--spacing-4);
        background: var(--color-text);
        color: var(--color-white);
        
        &.error {
            opacity: 0.8;
            border: 1px solid var(--color-negative);
            box-shadow: var(--color-negative-outline) 0 0 3px 2px;
            .k-icon {
                color: var(--color-negative-light)
            }
        }
    }
    button.secondary {
        padding: var(--spacing-2) var(--spacing-4);
        border: solid 1px var(--color-border);
       
       &.error {
            opacity: 0.8;
            border: 1px solid var(--color-negative);
            box-shadow: var(--color-negative-outline) 0 0 3px 2px;
            .k-icon {
                color: var(--color-negative)
            }
        }

    }
    button.tertiary {
      
        text-decoration: underline;
        color: var(--color-focus);
         &.error {
            opacity: 0.8;
            color: var(--color-negative);
        }
    }
  
</style>