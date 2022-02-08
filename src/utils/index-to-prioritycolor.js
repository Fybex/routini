export default function PriorityColor(value) {
    return value === 1 ? 'red' : value === 2 ? 'orange' : value === 3 ? 'green' : 'gray'
}