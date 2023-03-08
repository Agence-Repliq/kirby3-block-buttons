<?php

Kirby::plugin('repliq/kirby3-block-buttons', [
  'blueprints' => [
    'blocks/buttons' => __DIR__ . '/blueprints/blocks/buttons.yml',
  ],
  'snippets' => [
    'blocks/slideshow' => __DIR__ . '/snippets/blocks/slideshow.php',
  ],
  'translations' => [
    'fr' => [
      'field.blocks.buttons.name' => 'Boutons',
      'field.blocks.buttons.emptyState' => 'bouton'
    ]
  ]
]);
