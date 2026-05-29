# DestinationPage.vue

```vue
<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <!-- TITLE -->
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-green-700 mb-3">
        {{ province.name }}
      </h2>

      <p class="text-gray-600 max-w-2xl mx-auto">
        {{ province.description }}
      </p>
    </div>

    <!-- HERO IMAGE -->
    <div class="mb-10">
      <img
        :src="province.hero"
        :alt="province.name"
        class="w-full h-[450px] object-cover rounded-3xl shadow-lg"
      />
    </div>

    <!-- PLACES -->
    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="place in province.places"
        :key="place.name"
        class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
      >
        <img
          :src="place.image"
          :alt="place.name"
          class="w-full h-56 object-cover"
        />

        <div class="p-5">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            {{ place.name }}
          </h3>

          <p class="text-gray-600 text-sm leading-relaxed">
            {{ place.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const provinces = {
  1: {
    name: 'Northern Province',
    description:
      'Discover mountains, gorillas, lakes, and beautiful landscapes in Northern Rwanda.',

    hero:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',

    places: [
      {
        name: 'Volcanoes National Park',
        image:
          'https://images.unsplash.com/photo-1516426122078-c23e76319801',
        description:
          'Famous for mountain gorillas and beautiful volcano views.'
      },
      {
        name: 'Twin Lakes',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        description:
          'Relax near the peaceful lakes surrounded by hills.'
      },
      {
        name: 'Musanze Caves',
        image:
          'https://images.unsplash.com/photo-1521295121783-8a321d551ad2',
        description:
          'Explore historical caves formed by volcanic activity.'
      }
    ]
  },

  2: {
    name: 'Western Province',
    description:
      'Experience Lake Kivu, forests, and amazing views in Western Rwanda.',

    hero:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',

    places: [
      {
        name: 'Lake Kivu',
        image:
          'https://images.unsplash.com/photo-1493558103817-58b2924bce98',
        description:
          'Enjoy beaches, boats, and relaxing lake activities.'
      },
      {
        name: 'Nyungwe Forest',
        image:
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        description:
          'Walk through one of Africa’s oldest rainforests.'
      },
      {
        name: 'Canopy Walk',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
        description:
          'See incredible forest views from above the trees.'
      }
    ]
  },

  3: {
    name: 'Eastern Province',
    description:
      'Explore wildlife, parks, and nature in Eastern Rwanda.',

    hero:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',

    places: [
      {
        name: 'Akagera National Park',
        image:
          'https://images.unsplash.com/photo-1516939884455-1445c8652f83',
        description:
          'See lions, elephants, giraffes, and zebras.'
      },
      {
        name: 'Savannah Views',
        image:
          'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
        description:
          'Enjoy beautiful open landscapes and wildlife.'
      },
      {
        name: 'Lake Ihema',
        image:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        description:
          'Take a boat ride and watch hippos and birds.'
      }
    ]
  },

  4: {
    name: 'Southern Province',
    description:
      'Visit cultural and historical attractions in Southern Rwanda.',

    hero:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',

    places: [
      {
        name: 'King’s Palace Museum',
        image:
          'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
        description:
          'Learn about Rwanda’s traditional monarchy and culture.'
      },
      {
        name: 'Ethnographic Museum',
        image:
          'https://images.unsplash.com/photo-1518998053901-5348d3961a04',
        description:
          'Discover Rwanda’s history and traditions.'
      },
      {
        name: 'Green Hills',
        image:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
        description:
          'Enjoy the peaceful natural beauty of Southern Rwanda.'
      }
    ]
  }
}

const province = computed(() => {
  return provinces[route.query.province] || provinces[1]
})
</script>
```

# Router Example

```js
{
  path: '/destinations',
  name: 'Destinations',
  component: DestinationPage
}
```
