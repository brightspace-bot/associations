function getAssociations(root = true, transientAdd = [], transientRemove = []) {
	return {
		'class': [
			'associations'
		],
		'entities': [
			{
				'class': [
					'single-association'
				],
				'rel': [
					'item'
				],
				'entities': [
					{
						'class': [
							'activity-usage'
						],
						'rel': [
							'item',
							'https://rubrics.api.brightspace.com/rels/associated-activity'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060'
					}
				],
				'actions': (root ? [{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'delete-association',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-remove',
							'value': ['13'].concat(transientRemove)
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': 'true'
						}
					]
				}] : []).concat([{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'delete-association-deferred',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-remove',
							'value': ['13'].concat(transientRemove)
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': ''
						}
					]
				}
				]),
				'links': [
					{
						'rel': [
							'self'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/13/associations/3'
					},
					{
						'rel': [
							'https://rubrics.api.brightspace.com/rels/rubric',
							'up'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/13'
					}
				]
			},
			{
				'class': [
					'potential-association'
				],
				'rel': [
					'item'
				],
				'entities': [
					{
						'class': [
							'activity-usage'
						],
						'rel': [
							'item',
							'https://rubrics.api.brightspace.com/rels/associated-activity'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060'
					}
				],
				'actions': (root ? [{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'create-association',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-add',
							'value': ['17'].concat(transientAdd)
						},
						{
							'name': 'type',
							'value': 'rubrics'
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': 'true'
						}
					]
				}] : []).concat([{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'create-association-deferred',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-add',
							'value': ['17'].concat(transientAdd)
						},
						{
							'name': 'type',
							'value': 'rubrics'
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': ''
						}
					]
				}]),
				'links': [
					{
						'rel': [
							'https://rubrics.api.brightspace.com/rels/rubric',
							'up'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/17'
					}
				]
			},
			{
				'class': [
					'potential-association'
				],
				'rel': [
					'item'
				],
				'entities': [
					{
						'class': [
							'activity-usage'
						],
						'rel': [
							'item',
							'https://rubrics.api.brightspace.com/rels/associated-activity'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060'
					}
				],
				'actions': (root ? [{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'create-association',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-add',
							'value': ['18'].concat(transientAdd)
						},
						{
							'name': 'type',
							'value': 'rubrics'
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': 'true'
						}
					]
				}] : []).concat([{
					'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
					'name': 'create-association-deferred',
					'method': 'POST',
					'fields': [
						{
							'name': 'transient-add',
							'value': ['18'].concat(transientAdd)
						},
						{
							'name': 'type',
							'value': 'rubrics'
						},
						{
							'name': 'save',
							'type': 'checkbox',
							'value': ''
						}
					]
				}]),
				'links': [
					{
						'rel': [
							'https://rubrics.api.brightspace.com/rels/rubric',
							'up'
						],
						'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/18'
					}
				]
			},
		],
		'links': [
			{
				'rel': [
					'self'
				],
				'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations'
			},
			{
				'rel': [
					'up'
				],
				'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060'
			}
		],
		'actions': (root ? [
			{
				'class': [
					'start-add-associations'
				],
				'title': 'Start Adding Associations',
				'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
				'name': 'start-add-associations',
				'method': 'POST',
				'fields': [
					{
						'name': 'save',
						'type': 'checkbox'
					},
					{
						'name': 'transient-add',
						'value': transientAdd
					},
					{
						'name': 'transient-remove',
						'value': transientRemove
					},
					{
						'name': 'type',
						'value': 'rubrics'
					}
				]
			}
		] : []).concat([{
			'class': [
				'create'
			],
			'title': 'Create Association',
			'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
			'name': 'create-association',
			'method': 'POST',
			'fields': [
				{
					'name': 'itemId'
				},
				{
					'name': 'type',
					'value': 'rubrics'
				}
			]
		}, {
			'class': [
				'apply'
			],
			'title': 'Apply Adding Associations',
			'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
			'name': 'apply-associations',
			'method': 'POST',
			'fields': [
				{
					'name': 'save',
					'type': 'checkbox',
					'value': 'true'
				},
				{
					'name': 'transient-add',
					'value': transientAdd
				},
				{
					'name': 'transient-remove',
					'value': transientRemove
				},
				{
					'name': 'type',
					'value': 'rubrics'
				}
			]
		}, {
			'class': [
				'cancel'
			],
			'title': 'Cancel Adding Associations',
			'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.activities.api.dev.brightspace.com/activities/6606_703000_8d6566eb-6f69-4a73-b08d-e787f9f4b87b/usages/123060/associations',
			'name': 'cancel-associations',
			'method': 'GET',
			'fields': [
				{
					'name': 'type',
					'value': 'rubrics'
				}
			]
		}])
	};
}

window.getNewAssociations = getAssociations;
