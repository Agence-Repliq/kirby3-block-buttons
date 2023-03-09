<?php

Kirby::plugin('repliq/kirby3-block-buttons', [
  'blueprints' => [
    'blocks/buttons' => __DIR__ . '/blueprints/blocks/buttons.yml',
  ],
  'snippets' => [
    'blocks/buttons' => __DIR__ . '/snippets/blocks/buttons.php',
  ],
  'translations' => [
    'fr' => [
      'field.blocks.buttons.name' => 'Boutons',
      'field.blocks.buttons.message.edit' => 'Modifier les boutons',
      'field.blocks.buttons.message.empty' => 'Ajouter des boutons',
      'field.blocks.buttons.message.error' => 'Veuillez selectionner une page ou remplir l\'url',
    ]
  ]
]);
