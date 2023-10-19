<template>
  <div class="container">
    <div class="title">
      <h1 class="title">Inflation Calculator</h1>
      <p>Estimate your dollar value over time</p>
    </div>
    <div class="bottom">
      <div class="row">
        <div class="inputs">
          <NumberInput
            name="dollarAmount"
            label="Dollar Amount"
            type="number"
            :value="dollarAmount"
            @input-change="updateValue"
          />

          <Dropdown
            label="Starting Year"
            :options="startYearOptions"
            :selectedOption="tenure"
            @tenure-change="updateTenure"
          />
          <Dropdown
            label="Ending Year"
            :options="endYearOptions"
            :selectedOption="tenure"
            @tenure-change="updateTenure"
          />
          <br />
          <div class="reset-disclosures">
    <button type="reset">Reset</button>
    <p>Disclosures</p>
  </div>
        </div>
        <div>
          <div class="output">
            <p>Your $100 in 2001 will be worth</p><br>
            <h1>$153.02</h1><br>
            <p>in 2021</p>
          </div>
          <div class="avg">
            <table>
              <tbody>
                <tr>
                  <td style="width: 70%"><p>Average Inflation Rate</p></td>
                  <td style="width: 30%"><p>22.10%</p></td>
                </tr>
                <tr>
                  <td style="width: 70%"><p>Cumulative Inflation Rate</p></td>
                  <td style="width: 30%"><p>22.10%</p></td>
                </tr>
              </tbody>
            </table>
            <button class="btn">See Inflamation Chart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NumberInput from "../shared/components/NumberInput.vue";
import Dropdown from "../shared/components/Dropdown.vue";

const dollarAmount = ref(100);
const startYear = ref(2001);
const endYear = ref(2021);

const startYearOptions = ref([]);
const endYearOptions = ref([]);

for (let year = 1934; year <= 2069; year++) {
  startYearOptions.value.push({ value: year, label: year.toString() });
  endYearOptions.value.push({ value: year, label: year.toString() });
}

const updateValue = (name, value) => {
  this[name] = value;
};
const updateTenure = (newTenure) => {
  tenure.value = newTenure;
};
</script>

<style scoped>

.reset-disclosures {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reset-disclosures button {
  margin-right: 10px; /* Adjust the margin as needed */
}
.btn {
  font-size: 18px;
  color: #2aace3;
  line-height: normal;
  background: transparent;
  border: 1px solid #2aace3;
  width: 280px;
  height: 35px;
  padding: 0 40px;
  margin-top: 50px;
  margin-left: 50px;
}
.avg {
  padding: 20px;
  margin-left: 80px;
}

.avg table {
  width: 100%;
  border-collapse: collapse;
}

.avg td:first-child {
  width: 70%;
}

.avg td:last-child {
  width: 30%;
}

.avg p {
  font-size: 21px;
  line-height: 1.65;
  color: #454545;
  padding: 0;
}
.output {
  padding: 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 40px 60px 40px 60px;
}

.output p {
  font-size: 23px;
  font-weight: 700;
  color: #101f30;
  line-height: 0.1;
}

.output h1 {
  font-size: 59px;
  font-weight: 700;
  text-align: center;
  color: #08c177;
}
.title {
  text-align: center;
}

.container {
  background-color: #f5f5f5;
}

.title {
  font-size: 40px;
  font-weight: 400;
  font-family: "Georgia", Times, serif;
  color: #101f30;
  text-align: center;
  margin: 30px 0 0;
}

.title p {
  font-size: 27px;
  font-family: "Lato", Arial, sans-serif;
  color: #666;
  text-align: center;
  margin: 10px 0 25px;
  border: none;
}

.bottom {
  margin: 0 150px 0 150px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.row {
  display: flex;
  flex-direction: row;
}
.inputs {
  padding: 20px;
  border-right: 1px solid rgb(214, 214, 214);
}
</style>