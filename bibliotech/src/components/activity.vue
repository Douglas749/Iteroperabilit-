<template>
  <div class="action-card">
    <h3 class="action-title">{{ title }}</h3>

    <button class="action-button" @click="onClickAction">
      {{ buttonText }}
    </button>

    <!-- Champ ID + bouton Valider, uniquement pour "Rendre un Livre" -->
    <div v-if="showInput" class="champ">
      <input
        v-model="userId"
        placeholder="Entrez l'ID du membre"
        ref="memberInput"
      />
      <button @click="onValidate" class="valid">Valider</button>
    </div>

    <!-- Historique si récupéré -->
    <ul v-if="history.length">
      <li v-for="loan in history" :key="loan.bookId">
        📚 Livre {{ loan.bookId }} — retourné le {{ formatDate(loan.returnDate) }}
        <span :class="loan.isLate ? 'late' : 'ontime'">
          ({{ loan.isLate ? 'En retard' : 'À temps' }})
        </span>
      </li>
    </ul>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ActionCard',
  props: {
    title: String,
    buttonText: String,
  },
  data() {
    return {
      showInput: false,
      userId: '',
      history: [],
      message: '',
    };
  },
  methods: {
    onClickAction() {
      if (this.buttonText === 'Rendre un Livre') {
        this.showInput = true;
        this.$nextTick(() => {
          this.$refs.memberInput.focus();
        });
      } else {
        this.$emit('action', this.buttonText);
      }
    },
    async onValidate() {
      this.message = '';
      if (!this.userId.trim()) {
        this.message = "L'ID du membre est requis.";
        return;
      }
      try {
        const res = await axios.get(`http://localhost:4002/returns/history/${this.userId}`);
        this.history = res.data.filter(loan => !loan.returnDate);
        if (!this.history.length) {
          this.message = "Aucun emprunt pour cet ID.";
        }
      } catch {
        this.message = "Échec du chargement de l'historique.";
      }
    },
    formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('fr-FR', options);
    }
  },
};
</script>

<style scoped>
.champ {
  margin-top: 20px;
}
.valid {
  margin-left: 8px;
  background-color: rgb(30, 232, 104);
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
}
.action-button {
  color: rgb(255, 250, 250);
  background-color: #000000f3;
  width: fit-content;
  padding: 5px 12px;
  border: none;
  border-radius: 4px;
}
ul {
  margin-top: 15px;
  padding-left: 20px;
}
.late {
  color: red;
  font-weight: bold;
}
.ontime {
  color: green;
}
</style>
