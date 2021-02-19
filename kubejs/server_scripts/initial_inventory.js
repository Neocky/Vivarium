events.listen('player.logged_in', function (event) {
	// check if player doesn't have initial_inventory gamestage yet
	if (!event.hasGameStage('initial_inventory')) {
		// add gamestage and starting items
		event.addGameStage('initial_inventory')
		event.player.give({item: 'ftbquests:book'})
		event.player.give({item: 'inspirations:key'})
		event.player.give({item: 'minecraft:tropical_fish'})
	}
})