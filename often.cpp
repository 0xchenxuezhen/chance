#include <iostream>

/**
 * @brief Main function that prints "Hello, World!" to standard output
 * @return int Returns 0 on successful execution
 */
int main() {
    // Using '\n' instead of std::endl for better performance
    // as it doesn't flush the output buffer unnecessarily
    std::cout << "Hello, World!\n";
    return 0;
}