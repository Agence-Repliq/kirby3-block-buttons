<?php $buttons = $block->group()->toStructure() ?>

<?php if ($buttons->count() > 0) : ?>
    <div class="block-buttons">
        <?php foreach ($buttons as $button) : ?>
            <?php 
                switch ($button->button_source()) {
                    case "page":
                        $href = $button->linkToPage()->toPage()->url();
                        break;
                    case "url":
                        $href = $button->url();
                        break;
                    case "file":
                        $href = $button->linkToFile()->toFile()->url();
                        break;
                    default:
                        $href = false;
                }
            ?>
            <?php if ($href) : ?>
                <a href="<?= $href ?>" class="block-buttons-item"><?= $button->label() ?></a>
            <?php endif; ?>
        <?php endforeach ?>
    </div>
<?php endif; ?>