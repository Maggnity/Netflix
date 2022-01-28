<script>  
$( document ).ready(function($) {
    $('.parado').on('play', function() {
        $(".rodando").each(function(){
                $(this).removeClass('rodando').addClass('parado');
                $(this).get(0).pause();
        });
        $(this).removeClass('parado').addClass('rodando');
        $(this).get(0).play();
    });
});
</script>