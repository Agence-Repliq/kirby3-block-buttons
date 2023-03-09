<?php $buttons = $block->group()->toStructure() ?>

<?php if ($buttons->count() > 0) : ?>
    <div class="block-buttons">
        <?php foreach ($buttons as $button) : ?>
            <?php if ($button->url()->isNotEmpty() || $button->linkToPage()->toPage()) : ?>
                <a href="<?= ($button->button_source() == "page") ? $button->linkToPage()->toPage() : $button->url() ?>" class="block-buttons-item"><?= $button->label() ?></a>
            <?php endif; ?>
        <?php endforeach ?>
    </div>
<?php endif; ?>