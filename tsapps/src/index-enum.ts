enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}
console.log('Up', Direction.Up)
console.log(Direction.Down)

enum UserResponse {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
}

respond("Princess Caroline", UserResponse.No);