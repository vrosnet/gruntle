(function()
{
    "use strict";
    
    var cbt =
    {
    	"loggedin": function()
    	{
    		W.GamePage.Show();
    	},
    	
    	"look": function(message)
    	{
    		W.GamePage.LookEvent(message);
    	},
    	
    	"actions": function(message)
    	{
    		W.GamePage.ActionsEvent(message);
    	},
    	
    	"arrived": function(message)
    	{
    		W.GamePage.ArrivedEvent(message);
    	},
    	
    	"departed": function(message)
    	{
    		W.GamePage.DepartedEvent(message);
    	}
    };
    
    W.OnMessageReceived = function(s)
    {
    	var messagetype = s.event;
    	if (!messagetype)
    		return;
    	var handler = cbt[messagetype];
    	if (!handler)
    	{
    		console.log("unrecognised server message '"+messagetype+"':\n"+
    			$.toJSON(s));
    		return;
    	}
    	
    	handler(s);
    };
}
)();
