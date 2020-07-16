$(document).ready(function(){
    $(".wp-block-emfl-tab-content").each(function(i, el){
        $(this).attr("id", "tab_content_" + i)
        if( i !== 0 ) {
            $(this).hide();
        }
    });

    $(".guten-tab-items ul li").each(function(i, el){
        $(this).attr("rel", "tab_content_" + i)

        $(this).bind("click", function(){
            const target_id = "#" + $(this).attr("rel");
            swap_active_class( $(this) );

            $(".wp-block-emfl-tab-content").each(function(){
                $(this).slideUp();
            });
            $(target_id).slideDown();
        });

    });
});

function swap_active_class( $current_el ) {
    $(".guten-tab-items ul li").each(function(){
        $(this).attr("style", "background: #dedede;color: #414141; border-bottom: 1px solid #cfcfcf;")
    });

    $( $current_el ).attr("style", "background: chocolate;color: #f4f4f4; border-bottom: 1px solid brown;")
}