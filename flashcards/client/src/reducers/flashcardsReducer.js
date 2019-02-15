export default function flashcardsReducer(
	state = [],
	action) {
	switch(action.type) {
		case "ADD_FLASHCARD":
			return [...state, action.flashcard]
		default:
			return state;
	}
}