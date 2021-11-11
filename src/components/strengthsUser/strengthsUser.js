export default {
  name: "strengthsUser",
  props: {
    strengths: Array,
  },
  data() {
    return {
      user: "",
      array: this.strengths.reduce((prev, current) => {
        let exists = prev.find((x) => x.proficiency === current.proficiency);
        if (!exists) {
          exists = {
            proficiency: current.proficiency,
            strengths: [],
            open: false,
          };
          prev.push(exists);
        }
        if (current != null) {
          exists.strengths.push({
            name: current.name,
            id: current.id,
            recommendations: current.recommendations,
          });
        }
        return prev;
      }, []),
    };
  },
  watch: {
    strengths(value) {
      this.array = value.reduce((prev, current) => {
        let exists = prev.find((x) => x.proficiency === current.proficiency);
        if (!exists) {
          exists = {
            proficiency: current.proficiency,
            strengths: [],
            open: false,
          };
          prev.push(exists);
        }
        if (current != null) {
          exists.strengths.push({
            name: current.name,
            id: current.id,
            recommendations: current.recommendations,
          });
        }
        return prev;
      }, []);
    },
  },
  methods: {
    activeLevel(index) {
      this.array[index].open = !this.array[index].open;
    },
  },
};
