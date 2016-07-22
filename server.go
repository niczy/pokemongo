package pokemongo

import (
	"fmt"
	"github.com/niczy/pokemongolib/handlers"
	"net/http"
)

func init() {
	http.HandleFunc("/_/api", handlers.Api)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, world!")
}
