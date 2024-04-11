
<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>Cards</h4>
          <RouterLink to="/cards/create" class="btn btn-primary float-end">
            Add Card
          </RouterLink>
        </div>

        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Adress</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody v-if="this.cards.length > 0">
              <tr v-for="(card, index) in this.cards" :key="index">
                <td>{{ card.id }}</td>
                <td>{{ card.title }}</td>
                <td>{{ card.description }}</td>
                <td>{{ card.phonenumber }}</td>
                <td>{{ card.email }}</td>
                <td>{{ card.website }}</td>
                <td>{{ card.address }}</td>
                <td>
                  <RouterLink :to="{path :'/cards/' + card.id+ '/edit'}" class="btn btn-success ">
                    Edit
                  </RouterLink>
                  <button type="button" @click="deleteCard(card.id)" class="btn btn-danger ">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="8">
                  Loading...
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'cards',
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    this.getCards();
    // console.log('hello');

  },
  methods: {
    getCards() {
      axios.get('http://127.0.0.1:8000/api/cards').then(res => {
        this.cards = res.data
        // console.log(res);
      })
  },

  deleteCard(cardId){

    if(confirm('Are you sure you want to delete this card?')){
    // console.log(cardId)
    axios.delete('http://127.0.0.1:8000/api/cards/' + cardId).then(res => {

      alert(res.data.message);
      this.getCards();
    })
    .catch(function (error) {
            // console.error("Error:", error);

            if (error.response) {
                console.log("Error response:", error.response);
                if (error.response.status == 404) {
                    alert(error.response.massage == 'Card not found');
                }
            }
        });

    }
  },
}
}
</script>