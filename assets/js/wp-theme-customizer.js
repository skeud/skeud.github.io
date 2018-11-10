(function($)
{


// ====================================================================================================================
// ====================================================================================================================


	wp.customize( 'blogname', function( value )
	{
		value.bind( function( to )
		{
			$( 'header h1.site-title a' ).html( to );
		});
	});
	
	
	wp.customize( 'blogdescription', function( value )
	{
		value.bind( function( to )
		{
			// $( 'header  p.site-description' ).html( to );
		});
	});


// ====================================================================================================================
// ====================================================================================================================


	wp.customize( 'setting_link_color', function( value )
	{
		value.bind( function( to )
		{
			var styleCss = '<style type="text/css">' + 
								
								'a, .entry-content > p > a:not(.button) { color: ' + to + '; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});
	
	
	wp.customize( 'setting_link_hover_color', function( value )
	{
		value.bind( function( to )
		{
			var styleCss = '<style type="text/css">' + 
								
								'a:hover, .entry-content > p > a:hover { color: ' + to + '; }' +
								
								'input[type=submit]:hover,' +
								'input[type=button]:hover,' +
								'button:hover,' +
								'a.button:hover,' +
								'input[type=submit]:hover i,' +
								'input[type=button]:hover i,' +
								'button:hover i,' +
								'a.button:hover i { color: ' + to + '; border-color: ' + to + '; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});


// ====================================================================================================================
// ====================================================================================================================


 	wp.customize( 'setting_content_font', function( value )
	{
		value.bind( function( to )
		{
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=' + to + '">' );
			
			
			var styleCss = '<style type="text/css">' + 
								
								'body, input, textarea, select, button { font-family: "' + to + '", serif; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});
	
	
 	wp.customize( 'setting_heading_font', function( value )
	{
		value.bind( function( to )
		{
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=' + to + '">' );
			
			
			var styleCss = '<style type="text/css">' + 
								
								'h1, h2, h3, h4, h5, h6 { font-family: "' + to + '", serif; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});
	
	
 	wp.customize( 'setting_menu_font', function( value )
	{
		value.bind( function( to )
		{
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=' + to + '">' );
			
			
			var styleCss = '<style type="text/css">' + 
								
								'.nav-menu { font-family: "' + to + '", serif; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});
	
	
 	wp.customize( 'setting_text_logo_font', function( value )
	{
		value.bind( function( to )
		{
			$( 'body' ).append( '<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=' + to + '">' );
			
			
			var styleCss = '<style type="text/css">' + 
								
								'.site-title { font-family: "' + to + '", serif; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});


// ====================================================================================================================
// ====================================================================================================================


 	wp.customize( 'setting_content_width', function( value )
	{
		value.bind( function( to )
		{
			var styleCss = '<style type="text/css">' + 
								
								'.layout-fixed { max-width: ' + to + '; }' +
								
							'</style>';
			
			
			$( 'body' ).append( styleCss );
		});
	});


// ====================================================================================================================
// ====================================================================================================================


})(jQuery);