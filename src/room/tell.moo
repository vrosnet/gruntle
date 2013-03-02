;$verb($room, "tell", $god)
program $room:tell
	if (this:istemplate())
		/* Broadcast message to all intantiations of this room. */
		for child in (children(this))
			child:tell(@args);
		endfor
	else
		/* Broadcast message to all players in this room. */
		for player in (this.contents)
			if (is_player(player))
				player:tell(@args);
			endif
		endfor
	endif
.
