#!/bin/bash

# Birth date (modify this to your birth date)
BIRTH_DATE="1978-07-31"

# Get current date
CURRENT_DATE=$(date +%Y-%m-%d)

# Convert dates to seconds since epoch
BIRTH_SECONDS=$(date -j -f "%Y-%m-%d" "$BIRTH_DATE" +%s 2>/dev/null || date -d "$BIRTH_DATE" +%s)
CURRENT_SECONDS=$(date +%s)

# Calculate difference in seconds
DIFF_SECONDS=$((CURRENT_SECONDS - BIRTH_SECONDS))

# Calculate weeks (86400 seconds in a day, 7 days in a week)
WEEKS=$((DIFF_SECONDS / 604800))
CURRENT_WEEK=$((WEEKS + 1))  # Add 1 because we count from week 1, not week 0

# Calculate additional days beyond complete weeks
REMAINING_DAYS=$(( (DIFF_SECONDS % 604800) / 86400 ))

# Calculate exact age for reference
YEARS=$((WEEKS / 52))
REMAINING_WEEKS=$((WEEKS % 52))

# Display results
echo "═══════════════════════════════════════"
echo "         LIFE WEEK CALCULATOR          "
echo "═══════════════════════════════════════"
echo ""
echo "Birth Date:     $BIRTH_DATE"
echo "Current Date:   $CURRENT_DATE"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "You are currently in week: $CURRENT_WEEK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "That's $WEEKS complete weeks + $REMAINING_DAYS days"
echo "Or approximately $YEARS years and $REMAINING_WEEKS weeks"
echo ""
