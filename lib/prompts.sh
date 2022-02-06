function confirm() {
    read -p "$1 (Y/N): " CONFIRM && [[ $CONFIRM == [yY] || $CONFIRM == [yY][eE][sS] ]] || return 1
}
