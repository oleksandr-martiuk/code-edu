<template>
    <li>
        <!-- Динамическое добавление класса с условием, по которому этот класс будет добавляться -->
        <span
            v-bind:class="{done: task.completed}"
            v-on:change="task.completed = !task.completed"
        >
            <input type="checkbox" class="pointer">
            {{i}}. {{task.title | uppercase}}
        </span>
        <!-- Что-бы сообщить родительскому компоненту о событии в ребенке, вызываем $emit('') -->
        <button
            class="rm pointer"
            v-on:click="$emit('remove-task', task.id)"
        >
            &times;
        </button>
    </li>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                required: true
            },
            i: {
                type: Number,
                reqired: true
            }
        },
        filters: {
            uppercase(value) {
                const splitArr = value.split(' ');
                return [splitArr[0].toUpperCase(), ...splitArr.slice(1)].join(' ');
            }
        }
    }
</script>

<style scope>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background: red;
        color: #fff;
        border-radius: 50%;
        border: 0.4px black solid;
        font-weight: bold;
    }
    input {
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>
