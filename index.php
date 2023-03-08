<?php

Kirby::plugin('repliq/kirby3-block-buttons', [
  'blueprints' => [
    'blocks/slideshow' => __DIR__ . '/blueprints/blocks/slideshow.yml',
  ],
  'snippets' => [
    'blocks/slideshow' => __DIR__ . '/snippets/blocks/slideshow.php',
  ],
  'translations' => [
    'fr' => [
      'field.blocks.slideshow.name' => 'Slideshow multimedias',
    ]
  ]
]);
