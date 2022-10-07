<script setup>
import { useAppState } from "@/store/appStateStore.js";
import { ref } from "vue";

const appState = useAppState();
appState.title = "";

const categories = [
  "Best Leader 2022`23",
  "Fisik",
  "Mental",
  "Sport Team",
  "KPI",
  "KPI Team",
  "Meeting Clan",
  "Fit & Proper Test",
  "Best Donatur",
  "Best Award",
];

const data = [
  {
    Timestamp: "5/13/2022 18:24:38",
    name: "kartika",
    gender: "female",
    email: "kartika.teguh@bumiindogroup.com",
    fisik: "28",
    mental: "30",
    kpi: "81.34",
    kpiTeam: "3",
    sportTeam: "3",
    absence: "4",
    fit: "7",
    donatur: "562500",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:25:02",
    name: "yudha",
    gender: "male",
    email: "yudha.teguh@bumiindogroup.com",
    fisik: "0",
    mental: "0",
    kpi: "0",
    kpiTeam: "0",
    sportTeam: "0",
    absence: "0",
    fit: "0",
    donatur: "0",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:25:34",
    name: "richmon",
    gender: "male",
    email: "richmonkoriston168@gmail.com",
    fisik: "35",
    mental: "30",
    kpi: "82.8",
    kpiTeam: "4",
    sportTeam: "4",
    absence: "5",
    fit: "7",
    donatur: "0",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:28:24",
    name: "robby",
    gender: "male",
    email: "robbyhermawansw@gmail.com",
    fisik: "32.2",
    mental: "20",
    kpi: "80.49",
    kpiTeam: "3",
    sportTeam: "5",
    absence: "5",
    fit: "5",
    donatur: "500",
    award: "1",
  },
  {
    Timestamp: "5/13/2022 18:28:26",
    name: "richwan",
    gender: "male",
    email: "varofeli@gmail.com",
    fisik: "0",
    mental: "0",
    kpi: "0",
    kpiTeam: "0",
    sportTeam: "0",
    absence: "0",
    fit: "0",
    donatur: "0",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:29:28",
    name: "edwin",
    gender: "male",
    email: "edwinandreanto@gmail.com",
    fisik: "37.1",
    mental: "11",
    kpi: "80",
    kpiTeam: "3",
    sportTeam: "3",
    absence: "5",
    fit: "6",
    donatur: "0",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:30:59",
    name: "stefani",
    gender: "female",
    email: "stefani.wijaya@bumiindogroup.com",
    fisik: "27.9",
    mental: "9",
    kpi: "74.4",
    kpiTeam: "3",
    sportTeam: "5",
    absence: "5",
    fit: "7",
    donatur: "100000",
    award: "0",
  },
  {
    Timestamp: "5/13/2022 18:45:21",
    name: "dewi",
    gender: "female",
    email: "dewiteguh86@gmail.com",
    fisik: "0",
    mental: "0",
    kpi: "0",
    kpiTeam: "0",
    sportTeam: "0",
    absence: "0",
    fit: "0",
    donatur: "0",
    award: "0",
  },
  {
    Timestamp: "5/14/2022 8:34:00",
    name: "martiendt",
    gender: "male",
    email: "martiendt@gmail.com",
    fisik: "08",
    mental: "30",
    kpi: "75.88",
    kpiTeam: "2",
    sportTeam: "5",
    absence: "5",
    fit: "6",
    donatur: "200000",
    award: "0",
  },
];

const result = ref([]);

const arraySort = () => {
  return result.value.sort((a, b) => {
    if (parseFloat(b.score) > parseFloat(a.score)) {
      return 1;
    } else {
      return -1;
    }
  });
};

const getFisik = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    let a = 0;
    if (data[i].gender === "male") {
      a = 36 - Number(data[i].fisik);
    } else {
      a = 29 - Number(data[i].fisik);
    }
    let b = (10 - a) * 10;
    let c = b < 0 ? 0 : b;
    if (c > 100) c = 100;
    result.value.push({
      name: data[i].name,
      score: c,
    });
  }
  result.value = arraySort();
  return result;
};

const getMental = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: (Number(data[i].mental) / 30) * 100,
    });
  }
  result.value = arraySort();
  return result;
};

const getDonatur = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: Number(data[i].donatur),
    });
  }
  result.value = arraySort();
  return result;
};

const getAbsence = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: (Number(data[i].absence) / 5) * 100,
    });
  }
  result.value = arraySort();
  return result;
};

const getKpi = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: Number(data[i].kpi),
    });
  }
  result.value = arraySort();
  return result;
};

const getKpiTeam = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: Number(data[i].kpiTeam) * 25,
    });
  }
  result.value = arraySort();
  return result;
};

const getFit = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: Number(data[i].fit) * 10,
    });
  }
  result.value = arraySort();
  return result;
};

const getSport = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: Number(data[i].sportTeam) * 20,
    });
  }
  result.value = arraySort();
  return result;
};

const getBest = () => {
  result.value = [];
  getKpi();
  let temp = result.value;
  getKpiTeam();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  getFisik();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  getMental();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  getSport();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  getAbsence();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  getFit();
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < result.value.length; j++) {
      if (temp[i].name == result.value[j].name) {
        temp[i].score += result.value[j].score;
        break;
      }
    }
  }
  result.value = temp;
  result.value = arraySort();
  return result;
};

const getScore = () => {
  result.value = [];
  for (let i = 0; i < data.length; i++) {
    result.value.push({
      name: data[i].name,
      score: 0,
    });
  }
  return result;
};

getBest();

const title = ref(categories[0]);

const chooseCategory = (category) => {
  title.value = category;
  getScore();
  if (category == "Fisik") getFisik();
  if (category == "Mental") getMental();
  if (category == "Meeting Clan") getAbsence();
  if (category == "Sport Team") getSport();
  if (category == "KPI") getKpi();
  if (category == "KPI Team") getKpiTeam();
  if (category == "Best Leader 2022`23") getBest();
  if (category == "Fit & Proper Test") getFit();
  if (category == "Best Donatur") getDonatur();
};
</script>

<template>
  <div class="flex w-full min-h-screen">
    <div class="w-96 bg-white p-8 hidden lg:block">
      <h1 class="font-extrabold text-xl uppercase">Categories</h1>
      <ul class="flex flex-col pt-4 -ml-4">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="cursor-pointer hover:bg-indigo-500 my-1 hover:text-white px-4 py-2 rounded-xl"
          :class="[{ 'bg-indigo-500 text-white px-4 py-2 rounded-xl': title == categories[index] }]"
          @click="chooseCategory(categories[index])"
        >
          {{ categories[index] }}
        </li>
      </ul>
    </div>
    <div class="p-8 w-full">
      <div class="block lg:hidden mb-4">
        <h1 class="font-extrabold text-xl uppercase">Categories</h1>
        <ul class="flex pt-4 w-full overflow-auto space-x-2">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="
              flex
              justify-center
              items-center
              cursor-pointer
              hover:bg-indigo-500
              my-1
              hover:text-white
              px-4
              py-2
              rounded-xl
            "
            :class="[{ 'bg-indigo-500 text-white px-4 py-2 rounded-xl': title == categories[index] }]"
            @click="chooseCategory(categories[index])"
          >
            {{ categories[index] }}
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-5">
        <img src="@/assets/ranking.png" class="h-20" />
        <h1 class="font-extrabold text-4xl">{{ title }}</h1>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full w-full">
                <thead class="border-b-4 rounded-t-3xl">
                  <tr class="bg-blue-100 rounded-t-3xl shadow">
                    <th scope="col" class="text-sm font-bold uppercase text-gray-900 px-6 py-4 text-center w-20">#</th>
                    <th scope="col" class="text-sm text-center font-bold uppercase text-gray-900 px-6 py-4">Leaders</th>
                    <th scope="col" class="text-sm text-center font-bold uppercase text-gray-900 px-6 py-4">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in result" :key="index" class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <span v-if="index < 3" class="w-10">
                        <img v-if="index === 0" src="@/assets/badge-1.png" class="" />
                        <img v-if="index === 1" src="@/assets/badge-2.png" class="" />
                        <img v-if="index === 2" src="@/assets/badge-3.png" class="" />
                      </span>
                      <p v-else class="w-10 text-center font-extrabold">{{ index + 1 }}</p>
                    </td>
                    <td
                      class="text-sm text-center text-gray-900 px-6 py-4 whitespace-nowrap"
                      :class="[
                        { 'text-xl font-extrabold': index == 0 },
                        { 'text-lg font-bold': index == 1 || index == 2 },
                      ]"
                    >
                      {{ user.name }}
                    </td>
                    <td
                      class="text-sm text-center text-gray-900 px-6 py-4 whitespace-nowrap"
                      :class="[
                        { 'text-xl font-extrabold': index == 0 },
                        { 'text-lg font-bold': index == 1 || index == 2 },
                      ]"
                    >
                      {{ parseFloat(user.score).toFixed(2) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
