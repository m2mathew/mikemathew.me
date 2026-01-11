#!/bin/bash

# Birth date (modify this to your birth date)
BIRTH_DATE="1978-07-31"

# Color definitions
PINK='\033[38;2;227;61;148m'  # #e33d94 in RGB
RESET='\033[0m'
BOLD='\033[1m'

# Function to calculate weeks
calculate_weeks() {
    local target_date=$1

    # Convert dates to seconds since epoch
    BIRTH_SECONDS=$(date -j -f "%Y-%m-%d" "$BIRTH_DATE" +%s 2>/dev/null || date -d "$BIRTH_DATE" +%s)
    TARGET_SECONDS=$(date -j -f "%Y-%m-%d" "$target_date" +%s 2>/dev/null || date -d "$target_date" +%s)

    # Calculate difference in seconds
    DIFF_SECONDS=$((TARGET_SECONDS - BIRTH_SECONDS))

    # Calculate weeks (604800 seconds in a week)
    WEEKS=$((DIFF_SECONDS / 604800))
    CURRENT_WEEK=$((WEEKS + 1))  # Add 1 because we count from week 1, not week 0

    # Calculate additional days beyond complete weeks
    REMAINING_DAYS=$(( (DIFF_SECONDS % 604800) / 86400 ))

    # Calculate exact age for reference
    YEARS=$((WEEKS / 52))
    REMAINING_WEEKS=$((WEEKS % 52))

    # Display results
    echo ""
    echo -e "${PINK}═══════════════════════════════════════${RESET}"
    echo "         LIFE WEEK CALCULATOR          "
    echo -e "${PINK}═══════════════════════════════════════${RESET}"
    echo ""
    echo "Birth Date:     $BIRTH_DATE"
    echo "Target Date:    $target_date"
    echo ""
    echo -e "${PINK}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
    echo -e "${BOLD}Week number: $CURRENT_WEEK${RESET}"
    echo -e "${PINK}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
    echo ""
    echo "That's $WEEKS complete weeks + $REMAINING_DAYS days"
    echo "Or approximately $YEARS years and $REMAINING_WEEKS weeks"
    echo ""
}

# Function to validate date format
validate_date() {
    local date=$1
    if [[ $date =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
        # Try to parse the date to ensure it's valid
        if date -j -f "%Y-%m-%d" "$date" +%s >/dev/null 2>&1 || date -d "$date" +%s >/dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Main script
echo -e "${PINK}═══════════════════════════════════════${RESET}"
echo "         LIFE WEEK CALCULATOR          "
echo -e "${PINK}═══════════════════════════════════════${RESET}"
echo ""
echo "Which date should we target?"
echo ""
echo "1. Today's date"
echo "2. I'll provide a date"
echo ""
read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        TARGET_DATE=$(date +%Y-%m-%d)
        calculate_weeks "$TARGET_DATE"
        ;;
    2)
        echo ""
        read -p "Enter the date (format: YYYY-MM-DD, e.g., 2026-01-11): " TARGET_DATE

        # Validate the date
        if validate_date "$TARGET_DATE"; then
            calculate_weeks "$TARGET_DATE"
        else
            echo ""
            echo "❌ Invalid date format or date doesn't exist."
            echo "Please use YYYY-MM-DD format (e.g., 2026-01-11)"
            exit 1
        fi
        ;;
    *)
        echo ""
        echo "❌ Invalid choice. Please run the script again and enter 1 or 2."
        exit 1
        ;;
esac
