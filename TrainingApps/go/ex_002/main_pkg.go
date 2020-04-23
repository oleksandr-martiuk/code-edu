package main

import "fmt"

// each predefined 'variables' must be used --> other way will be 'Error'
func main() {
	var name = "Ban Tompson"
	fmt.Println(name)

	var ageInt int = 12
	fmt.Println(ageInt)

	var ageFloat32 float32 = 12.01
	var ageFloat64 float64 = 12.5555
	fmt.Println(ageFloat32, ageFloat64)

	fmt.Println(ageInt%3, "  |  ", ageInt%5)

	const pi = 3.14
	fmt.Println(pi / 2)
}
