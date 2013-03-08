(function()
{
    "use strict";

    $.fn.singleLineEditor =
    	function (commit_cb)
    	{
    		var self = this;
    		
    		self.attr("contenteditable", "true");
            self.keydown(
                function (event)
                {
					if (event.which == 13)
					{
						if (commit_cb)
							commit_cb(this);
						event.preventDefault();
					}
					else
						self.addClass("urgent");
                }
            );
            return self;
       	};

    $.fn.textWithBreaks =
    	function (newtext)
    	{
    		if (newtext)
    		{
    			/* Set */
    			
    			this.empty();
            	var paras = newtext.split("\n");
            	for (var i = 0; i < paras.length; i++)
            		this.append($("<p/>").text(paras[i]));
    		}
    		else
    		{
    			/* Get */
    			
        		var st = [];
        		
        		var c = this.children();
        		if (c.length == 0)
        			return this.text();
        		
        		c.each(
        			function(i, e)
        			{
        				var s = $(e).text().trim();
        				if (s !== "")
        					st.push(s);
        			}
        		);
        		
        		return st.join("\n");
    		}
    	};
}
)();
