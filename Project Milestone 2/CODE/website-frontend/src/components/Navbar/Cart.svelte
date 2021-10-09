<script>
    import Icon from "@iconify/svelte";
    let cart_filled = false;

    let cart = 'fluent:cart-16-regular';
    if (cart_filled) {
        cart = 'fluent:cart-16-filled';
    } else {
        cart = 'fluent:cart-16-regular';
    }

</script>
<style>

</style>

<Icon icon={cart} color="white" height="35" inline={true}/>