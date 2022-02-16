# https://gist.github.com/irazasyed/a7b0a079e7727a4315b9

declare +i -r ETC_HOSTS="/etc/hosts"
declare +i -r IP="127.0.0.1"

function remove_host() {
    local +i -r HOSTNAME="$1"
    if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
    then
        echo "$HOSTNAME Found in your $ETC_HOSTS, Removing now...";
        sudo sed -i".bak" "/$HOSTNAME/d" $ETC_HOSTS
    else
        echo "$HOSTNAME was not found in your $ETC_HOSTS";
    fi
}

function add_host() {
    HOSTNAME=$1
    HOSTS_LINE="$IP\t$HOSTNAME"
    if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
    then
        echo "$HOSTNAME already exists : $(grep $HOSTNAME $ETC_HOSTS)"
    else
        echo "Adding $HOSTNAME to your $ETC_HOSTS";
        sudo -- sh -c -e "echo '$HOSTS_LINE' >> /etc/hosts";
        
        if [ -n "$(grep $HOSTNAME /etc/hosts)" ]
        then
            echo "$HOSTNAME was added succesfully \n $(grep $HOSTNAME /etc/hosts)";
        else
            echo "Failed to Add $HOSTNAME, Try again!";
        fi
    fi
}
