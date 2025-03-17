---
title: "Roll Dice Function"
description: "A Python function for rolling dice in D&D with customizable parameters."
date: "2025-03-16"
tags: [Python, DnD, Dice Rolling]
---

```python
import random

def roll_dice(num_on_die: int, num_of_die: int, modifier: int) -> int:
    """
    Rolls a specified number of dice with a given number of sides and applies a modifier.

    :param num_on_die: Number of sides on each die.
    :param num_of_die: Number of dice to roll.
    :param modifier: A fixed modifier added to the roll result.
    :return: The total result of the dice roll.
    """
    if num_on_die <= 0 or num_of_die <= 0:
        raise ValueError("Number of sides and number of dice must be greater than zero.")

    roll_results = [random.randint(1, num_on_die) for _ in range(num_of_die)]
    total = sum(roll_results) + modifier

    return total
```
