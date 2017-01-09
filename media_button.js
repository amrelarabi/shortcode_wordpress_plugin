jQuery(function($) {
	$(document).ready(function(){
		// store the buttons interface
		$buttons = $("#shortcode_buttons").html();	
		
		// click insert shortcode above tinymce editor
		$('#insert-shortcode-button').click(function(){

			// show the shortcode panel
			$("#shortcodes_panel").show();

			// create fields view
			$("#shortcodes_panel .shortcode-frame-content button").click(function(){
				var html_forms;
				var select_form = "";
				switch($(this).attr('id')) {
					
					// SLIDER
					case  "slider_sc_btn" :
						// set flag
						shorcodeElement = "slider";
						
						// orderby
						select_form = 
						"<p>"+
						"<label for ='slider_order_select'> order by </label>" +
						"<select id = 'slider_order_select' class='select'>" +
							"<option value='latest'> latest </option>" +	
							"<option value='populer'> populer </option>"+
							"<option value='random'> random </option>"+
						"</select>"+
						"</p>";

						// number of posts
						select_form += 
						"<p><label for='posts_number'>Number of posts</label>"+
						"<input type='number' id='posts_number' name='value' value='5'></p>";

						// categories
						select_form += 
						"<p><label for='slider_cat_select'>categories</label>"+
						"<select multiple id='slider_cat_select' class='select'> ";
						for(count=0 ;count < arr.cat_name.length ; count++ ){
							if(arr.cat_ID[count]==1){
								select_form += "<option selected='selected' value='"+ arr.cat_ID[count] +"' >"+ arr.cat_name[count] +"</option>";
							}else{
								select_form += "<option value='"+ arr.cat_ID[count] +"' >"+ arr.cat_name[count] +"</option>";
							}
						}
						
						select_form +="</select></p>";
					break;
					
					// NEWSBAR
					case  "newsbar_sc_btn" :
						// set flag
						shorcodeElement = "newsbar";
						
						// orderby
						select_form = 
						"<p>"+
						"<label for ='bar_order_select'> order by </label>" +
						"<select id = 'slider_order_select' class='select'>" +
							"<option value='latest' > latest </option>" +	
							"<option value='populer'> populer </option>"+
							"<option value='random'> random </option>"+
						"</select>"+
						"</p>";
						
						// number of posts
						select_form += 
						"<p><label for='posts_number'>Number of posts</label>"+
						"<input type='number' value='5' id='posts_number' name='value'></p>";
						
						// categories
						select_form += 
						"<p><label for='bar_cat_select'>categories</label>"+
						"<select multiple id='slider_cat_select' class='select'> ";
						for(count=0 ;count < arr.cat_name.length ; count++ ){
							if(arr.cat_ID[count]==1){
								select_form += "<option selected='selected' value='"+ arr.cat_ID[count] +"' >"+ arr.cat_name[count] +"</option>";
							}else{
								select_form += "<option value='"+ arr.cat_ID[count] +"' >"+ arr.cat_name[count] +"</option>";
							}
						}
						select_form +="</select></p>";

						// animation
						select_form += 
						"<p>"+
						"<label for ='newsbar_animation'> order by </label>" +
						"<select id = 'newsbar_animation' class='select'>" +
							"<option value='slide'> slide </option>" +	
							"<option value='fade'> fade </option>"+
						"</select>"+
						"</p>";
						
						// speed
						select_form += 
						"<p><label for='newsbar_speed'>animation speed</label>"+
						"<input type='number' id='newsbar_speed' name='value' value='300'></p>";
						
					break;
	
				}
				$("#shortcodes_panel .shortcode-frame-content").html(select_form);

				$("#insert_shortcode").show();
				
			});

			// put parameters into shortcode then insert into tinymce
			$("#insert_shortcode").unbind('click').bind('click', function (e) {
				
				// SLIDER
				if(shorcodeElement == "slider"){
					// GET VARS
					
					// orderby
					order = $("#slider_order_select").val();
					
					// number
					numbers = $("#posts_number").val();
					
					// categories
					$categories = $('#slider_cat_select');
					categories = $categories.val();
					cat = categories.join(', ');
					
					// CREATE SHORTCODE SYNTAX
					sliderShortcode = 
					"[slider "+
						" order_by="+"'"+order+"'"+
						" posts_number="+"'"+numbers+"'"+
						" categories="+"'"+cat+"'"+
					"]";
				}
				
				// NEWSBAR
				else if(shorcodeElement == "newsbar") {
					// orderby
					order = $("#slider_order_select").val();
					
					// number
					numbers = $("#posts_number").val();
					
					// categories
					$categories = $('#slider_cat_select');
					categories = $categories.val();
					cat = categories.join(', ');
					
					// animation 
					animation = $("#newsbar_animation").val();
					
					// speed
					speed = $("#newsbar_speed").val();
					
					// CREATE SHORTCODE SYNTAX
					sliderShortcode = 
					"[newsbar "+
						" order_by="+"'"+order+"'"+
						" posts_number="+"'"+numbers+"'"+
						" categories="+"'"+cat+"'"+
						" animation="+"'"+animation+"'"+
						" speed="+"'"+speed+"'"+
					"]";
				}
				// insert shortcodes to the editor
				tinymce.get('content').execCommand('mceInsertContent', false, sliderShortcode);
			});

			// close panel
			$("#shortcodes_panel .media-modal-close").click(function(){
				$("#shortcodes_panel .shortcode-frame-content").html($buttons);
				$("#shortcodes_panel").hide();
				$("#insert_shortcode").hide();
			});
		});
	});
});
/*
jQuery(function($) {
    $(document).ready(function(){
			// store the buttons interface
			$buttons = $("#shortcode_buttons").html();
			
			// click insert shortcode above tinymce editor
            $('#insert-shortcode-button').click(function(){
				// show the shortcode panel
				$("#shortcodes_panel").show();
				
				// creat fields view
				$("#shortcodes_panel .shortcode-frame-content button").click(function(){
					var html_forms;
					var select_form = "";
					switch($(this).attr('id')) {
						case  "slider_sc_btn" :
							shorcodeElement = "slider_sc_btn";
							// orderby
							select_form = 
							"<p>"+
							"<label for ='slider_order_select'> order by </label>" +
							"<select id = 'slider_order_select' class='select'>" +
								"<option value='latest'> latest </option>" +	
								"<option value='populer'> populer </option>"+
								"<option value='random'> random </option>"+
							"</select>"+
							"</p>";
							
							// number of posts
							select_form += 
							"<p><label for='posts_number'>Number of posts</label>"+
							"<input type='number' id='posts_number' name='value'></p>";
							
							// categories
							select_form += 
							"<p><label for='slider_cat_select'>categories</label>"+
							"<select multiple id='slider_cat_select' class='select'> ";
							for(c=0 ;c < arr.cat_name.length ; c++ ){
								select_form += "<option value='"+ arr.cat_ID[c] +"' >"+ arr.cat_name[c] +"</option>";
							}
							select_form +="</select></p>";
						break;
					}
					$("#shortcodes_panel .shortcode-frame-content").html(select_form);

					$("#insert_shortcode").show();
				});
				
				// put parameters into shortcode then insert into tinymce
				$("#insert_shortcode").unbind('click').bind('click', function (e) {
					
					// get the field vars values
					
					if(shorcodeElement == "slider_sc_btn"){
					
						+++
					} // endif
					
					// insert shortcodes to the editor
					tinymce.get('content').execCommand('mceInsertContent', false, sliderShortcode);
				});
				
				// close panel
				$("#shortcodes_panel .media-modal-close").click(function(){
					$("#shortcodes_panel .shortcode-frame-content").html($buttons);
					$("#shortcodes_panel").hide();
					$("#insert_shortcode").hide();
				});

	});
	
	function insertShortCode(btn_id,shortcode){
		id = "#"+btn_id;
		$(id).click(function(){
			tinymce.get('content').execCommand('mceInsertContent', false,shortcode);
		});
	}
	
	
	
	
	
	

  
	
	});

});
*/