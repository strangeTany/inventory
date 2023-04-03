<script lang="ts">
    export let showAdditionForm; // boolean
    let dialog; // HTMLDialogElement
    $: if (dialog && showAdditionForm) dialog.showModal();

</script>

<dialog
        bind:this={dialog}
        on:close={() => (showAdditionForm = false)}
        on:click|self={() => dialog.close()}
>
    <div on:click|stopPropagation>
        <slot name="header" />
        <hr />
<!--        <slot />-->
        <h2> Add a new item </h2>
        <form>
            <input type="text" id="name" placeholder="Item" required>
            <input type="text" id="id" placeholder="Item's ID" required>
            <input type="number" id="price" placeholder="Price" min="0" step="0.01" required>
            <input type="number" id="integer" placeholder="Amount" pattern="[0-9]" min="1" step="1" required>
            <input type="text" id="vendor" placeholder="Vendor's name" required>
            <textarea id="message" rows="4" placeholder="Description" required></textarea>
            <div class="buttons">
                <button type="reset">Reset</button> <button type="submit">Send</button>
            </div>
        </form>
        <hr />
        <!-- svelte-ignore a11y-autofocus -->
        <button autofocus on:click={() => dialog.close()}>Close</button>
    </div>
</dialog>


<style>
    dialog {
        width: 50%;
        max-width: 900px;
        border-radius: 0.2em;
        border: none;
        padding: 0;
        background: aliceblue;
        font-family: 'Quicksand', sans-serif;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    form {
        background-color: #e9e4cf;
        display: flex;
        flex-direction: column;
        padding: 2vw 4vw;
        /*max-width: 500px;*/
        border-radius: 10px;
        align-content: center;
    }

    h2 {
        text-align: center;
        color: #ca7a12;
        margin-bottom: 20px;
    }

    form input, textarea {
        border: 0;
        margin: 10px 0;
        padding: 20px;
        outline: none;
        background: aliceblue;
        font-size: 16px;
        border-radius: 10px;
        resize: vertical;
    }

    form button {
        background: #f8f4ed;
        color: #ca7a12;
        border: 1px solid #ca7a12;
        padding: 15px;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
        margin: 20px auto 0;
        border-radius: 30px;
        transition: all .3s ease-in;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 1vh;
    }

    form button:hover {
        border: 1px solid #ca7a12;
        background: #ca7a12;
        color: white;
    }
</style>