```javascript
<script>
  let insertedCoins = 0;

  const coffeeOptions = [
    { name: '밀크커피', image: '/images/milkOut.png', price: 300 },
    { name: '설탕커피', image: '/images/sugarOut.png', price: 200 },
    { name: '블랙커피', image: '/images/blackOut.png', price: 100 }
  ];

  function selectedCoffee(name, price) {
    if (insertedCoins >= price) {
      insertedCoins -= price;
      alert(`${name} 주문 완료!`);
    } else {
      alert(`${price}원 이상 필요합니다.`);
    }
  }
</script>

<div id="container">
	<div class="menu">
		{#each coffeeOptions as coffee}
			<div class="option">
				<img src={coffee.image} alt={coffee.name} />
				<div>{coffee.name}</div>
				<div class="price">{coffee.price}</div>
                <button on:click={() => selectedCoffee(coffee.name, coffee.price)}>
  {coffee.name}
</button>
			</div>
		{/each}
	</div>
</div>

<style>
	#container {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
        border: 10px solid #ddd;
        background-color: rgb(238, 236, 229);
	}

	.menu {
		display: flex;
         justify-content: center; /* 수평 가운데 정렬 */
        align-items: center;     /* 수직 가운데 정렬 (필요한 경우) */
		gap: 1rem;
	}
	.option {
		text-align: center;
		cursor: pointer;
	}
	.option img {
		width: 120px;
		height: 160px;
		object-fit: cover;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}
	.price {
		color: #555; font-size: 0.9rem;
		margin-top: 0.3rem;
	}
</style>
```