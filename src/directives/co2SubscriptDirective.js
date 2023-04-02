export default {
    beforeMount(el) {
        const regex = /CO2/g;
        const replacement = 'CO<sub>2</sub>';
        el.innerHTML = el.innerHTML.replace(regex, replacement);
    },
};
