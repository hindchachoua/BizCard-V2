
<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>Cards</h4>
          <RouterLink to="/card/create" class="btn btn-primary float-end">
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
                  <RouterLink to="/" class="btn btn-success ">
                    Edit
                  </RouterLink>
                  <button type="button" class="btn btn-danger ">
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
  }
}
}
</script>