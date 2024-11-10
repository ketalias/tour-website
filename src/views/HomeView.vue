<template>
  <div class="home-page">
    <header>
      <h1 class="title">Lavish Saint</h1>
    </header>

    <div class="section">
      <h1>Popular Tours</h1>
      <div v-if="tours.length > 0">
        <div v-for="tour in tours" :key="tour.id" class="tour-card">
          <div class="tour-images">
            <img :key="index" :src="tour.images[0]" alt="Tour Image" />
          </div>
          <h2>{{ tour.name }}</h2>
          <p>{{ tour.description }}</p>
          <p>Location: {{ tour.location }}</p>
          <p>Cost: ${{ tour.cost }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading tours...</p>
      </div>
    </div>

    <div class="section">
      <h1>Client Overview</h1>
      <div v-if="clients.length > 0">
        <div v-for="client in clients" :key="client.id" class="client-card">
          <h3>{{ client.name }}</h3>
          <p>Rating: {{ client.rate }} stars</p>
          <p>{{ client.message }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading clients...</p>
      </div>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import { db } from "@/firebase-config";
import { collection, getDocs, query, limit } from "firebase/firestore";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HomeView",
  components: {
    FooterSection,
  },
  data() {
    return {
      tours: [],
      clients: [
        {
          id: 1,
          name: "John Doe",
          rate: 5,
          message: "The tour was amazing! Highly recommend!",
        },
        {
          id: 2,
          name: "Jane Smith",
          rate: 4,
          message: "Great experience, would love to come again!",
        },
        {
          id: 3,
          name: "Mark Johnson",
          rate: 3,
          message: "Good service, but the schedule was tight.",
        },
      ],
    };
  },
  async created() {
    await this.fetchTours();
  },
  methods: {
    async fetchTours() {
      try {
        const toursSnapshot = await getDocs(
          query(collection(db, "tours"), limit(3))
        );
        this.tours = toursSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home-page {
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
}

header {
  text-align: center;
  margin-bottom: 50px;

  .title {
    font-size: 8rem;
    font-weight: 700;
    color: #2c3e50;
  }
}

.section {
  margin-bottom: 60px;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }
}

.tour-card,
.client-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .tour-images {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  h2,
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
}

.client-card {
  p {
    font-style: italic;
    color: #777;
  }

  .rating {
    font-size: 1.2rem;
    color: #e67e22;
  }
}

footer-section {
  text-align: center;
  padding: 30px 0;
  background-color: #2c3e50;
  color: white;
}

@media (max-width: 768px) {
  .home-page {
    padding: 20px;
  }

  .title {
    font-size: 2.5rem;
  }

  .section h1 {
    font-size: 2rem;
  }

  .tour-card,
  .client-card {
    padding: 15px;
  }

  .tour-images img {
    border-radius: 6px;
  }

  .tour-card h2,
  .client-card h3 {
    font-size: 1.4rem;
  }

  .client-card p {
    font-size: 0.9rem;
  }
}
</style>
