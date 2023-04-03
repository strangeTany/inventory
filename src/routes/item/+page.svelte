<script lang="ts">
    import type {Item} from '../item'
    let item: Item = {name: "Hammer", id: "001", description: "Good hammer", price: 100, amount: 2, vendor: "Vendor1"}
</script>
<svelte:head>
	<title>{item.name}</title>
	<meta name="description" content="Collection of items in stock" />
</svelte:head>

<!-- <div class="cards_grid">
    <h1>{item.name}</h1>
    <p>{item.description}</p>
    <p>{item.price}</p>
    <p>{item.amount}</p>
    <p>{item.vendor}</p> 
</div> -->
<div class="card_page">
    <a class="back_button" href="../item_collection">Back</a>
    <div class="card_content">
        <h1 class="item_title">{item.name}</h1>
        <p class="item_description">{item.description}</p>
        <div class="item_info">
            <p class="item_price">{item.price}</p>
            <p class="item_amount">In Stock: {item.amount}</p>
            <p class="item_vendor">{item.vendor}</p>
        </div>
    </div>

</div>

<style>
   .card_page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
}

.card_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 800px;
    height: 80%;
    max-height: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 30px;
    text-align: center;
}

.item_title {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
}

.item_description {
    margin: 20px 0;
    font-size: 24px;
}

.item_image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: 20px 0;
}

.item_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.item_price {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

.item_amount {
    margin: 0;
    font-size: 20px;
}

.item_vendor {
    margin: 0;
    font-size: 20px;
    font-style: italic;
}

.back_button {
    position: absolute; /* position button absolute */
    top: 100px;
    left: 60px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    border: 2px solid #2e2e2e;
    color: #2e2e2e;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.back_button:hover {
    background-color: #2e2e2e;
    color: #fff;
}

</style>
