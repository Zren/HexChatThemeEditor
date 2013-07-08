var hexchat_events = {
    "Add Notify": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C18*%O$t%C18$1%O added to notify list.", 
        "type": ""
    }, 
    "Ban List": {
        "args": [
            "Channel", 
            "Banmask", 
            "Who set the ban", 
            "Ban time"
        ], 
        "msg": "%C22*%O$t%C22$1%O: %C18$2%O on %C24$4%O by %C26$3%O", 
        "type": ""
    }, 
    "Banned": {
        "args": [
            "Channel Name"
        ], 
        "msg": "%C22*%O$tCannot join %C22$1 %O(%C20You are banned%O).", 
        "type": ""
    }, 
    "Beep": {
        "args": [], 
        "msg": "", 
        "type": ""
    }, 
    "CTCP Generic": {
        "args": [
            "The CTCP event", 
            "The nick of the person"
        ], 
        "msg": "%C24*%O$tReceived a CTCP %C24$1%C from %C18$2%O", 
        "type": ""
    }, 
    "CTCP Generic to Channel": {
        "args": [
            "The CTCP event", 
            "The nick of the person", 
            "The Channel it's going to"
        ], 
        "msg": "%C24*%C$tReceived a CTCP %C24$1%C from %C18$2%C (to %C22$3%C)%O", 
        "type": ""
    }, 
    "CTCP Send": {
        "args": [
            "Receiver", 
            "Message"
        ], 
        "msg": ">%C18$1%C<$tCTCP %C24$2%O", 
        "type": ""
    }, 
    "CTCP Sound": {
        "args": [
            "The sound", 
            "The nick of the person", 
            "The channel"
        ], 
        "msg": "%C24*%O$tReceived a CTCP Sound %C24$1%C from %C18$2%O", 
        "type": ""
    }, 
    "CTCP Sound to Channel": {
        "args": [
            "The sound", 
            "The nick of the person", 
            "The channel"
        ], 
        "msg": "%C24*%O$tReceived a CTCP Sound %C24$1%C from %C18$2%C (to %C22$3%O)", 
        "type": ""
    }, 
    "Capability Acknowledgement": {
        "args": [
            "Server Name", 
            "Acknowledged Capabilities"
        ], 
        "msg": "%C29*%O$tCapabilities acknowledged: %C29$2%O", 
        "type": ""
    }, 
    "Capability List": {
        "args": [
            "Server Name", 
            "Server Capabilities"
        ], 
        "msg": "%C23*%O$tCapabilities supported: %C29$2%O", 
        "type": ""
    }, 
    "Capability Request": {
        "args": [
            "Requested Capabilities"
        ], 
        "msg": "%C23*%O$tCapabilities requested: %C29$1%O", 
        "type": ""
    }, 
    "Change Nick": {
        "args": [
            "Old nickname", 
            "New nickname"
        ], 
        "msg": "%C24*%O$t%C28$1%O is now known as %C18$2%O", 
        "type": ""
    }, 
    "Channel Action": {
        "args": [
            "Nickname", 
            "The action", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C18*$t%B$1%O $2", 
        "type": ""
    }, 
    "Channel Action Hilight": {
        "args": [
            "Nickname", 
            "The action", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C19*$t%B$1%B $2%O", 
        "type": ""
    }, 
    "Channel Ban": {
        "args": [
            "The nick of the person who did the banning", 
            "The ban mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O sets ban on %C18$2%O", 
        "type": ""
    }, 
    "Channel Creation": {
        "args": [
            "The channel", 
            "The time"
        ], 
        "msg": "%C22*%O$tChannel %C22$1%O created on %C24$2%O", 
        "type": ""
    }, 
    "Channel DeHalfOp": {
        "args": [
            "The nick of the person of did the dehalfop'ing", 
            "The nick of the person who has been dehalfop'ed"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes channel half-operator status from %C18$2%O", 
        "type": ""
    }, 
    "Channel DeOp": {
        "args": [
            "The nick of the person of did the deop'ing", 
            "The nick of the person who has been deop'ed"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes channel operator status from %C18$2%O", 
        "type": ""
    }, 
    "Channel DeVoice": {
        "args": [
            "The nick of the person of did the devoice'ing", 
            "The nick of the person who has been devoice'ed"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes voice from %C18$2%O", 
        "type": ""
    }, 
    "Channel Exempt": {
        "args": [
            "The nick of the person who did the exempt", 
            "The exempt mask"
        ], 
        "msg": "%C22*%O$t%C26$1%C sets exempt on %C18$2%O", 
        "type": ""
    }, 
    "Channel Half-Operator": {
        "args": [
            "The nick of the person who has been halfop'ed", 
            "The nick of the person who did the halfop'ing"
        ], 
        "msg": "%C22*%O$t%C26$1%O gives channel half-operator status to %C18$2%O", 
        "type": ""
    }, 
    "Channel INVITE": {
        "args": [
            "The nick of the person who did the invite", 
            "The invite mask"
        ], 
        "msg": "%C22*%O$t%C26$1%C sets invite exempt on %C18$2%O", 
        "type": ""
    }, 
    "Channel List": {
        "args": [], 
        "msg": "%UChannel          Users   Topic", 
        "type": ""
    }, 
    "Channel Message": {
        "args": [
            "Nickname", 
            "The text", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C18%H<%H$4$1%C18%H>%H%O$t$2", 
        "type": ""
    }, 
    "Channel Mode Generic": {
        "args": [
            "The nick of the person setting the mode", 
            "The mode's sign (+/-)", 
            "The mode letter", 
            "The channel it's being set on"
        ], 
        "msg": "%C22*%O$t%C26$1%O sets mode %C24$2$3%O on %C22$4%O", 
        "type": ""
    }, 
    "Channel Modes": {
        "args": [
            "Channel Name", 
            "Modes string"
        ], 
        "msg": "%C22*%O$tChannel %C22$1%O modes: %C24$2", 
        "type": ""
    }, 
    "Channel Msg Hilight": {
        "args": [
            "Nickname", 
            "The text", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C19%H<%H$4%B$1%B%H>%H$t$2%O", 
        "type": ""
    }, 
    "Channel Notice": {
        "args": [
            "Who it's from", 
            "The Channel it's going to", 
            "The message"
        ], 
        "msg": "-%C18$1%C/%C22$2%C-$t$3%O", 
        "type": ""
    }, 
    "Channel Operator": {
        "args": [
            "The nick of the person who did the op'ing", 
            "The nick of the person who has been op'ed"
        ], 
        "msg": "%C22*%O$t%C26$1%O gives channel operator status to %C18$2%O", 
        "type": ""
    }, 
    "Channel Quiet": {
        "args": [
            "The nick of the person who did the quieting", 
            "The quiet mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O sets quiet on %C18$2%O", 
        "type": ""
    }, 
    "Channel Remove Exempt": {
        "args": [
            "The nick of the person removed the exempt", 
            "The exempt mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes exempt on %C18$2%O", 
        "type": ""
    }, 
    "Channel Remove Invite": {
        "args": [
            "The nick of the person removed the invite", 
            "The invite mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes invite exempt on %C18$2%O", 
        "type": ""
    }, 
    "Channel Remove Keyword": {
        "args": [
            "The nick who removed the key"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes channel keyword", 
        "type": ""
    }, 
    "Channel Remove Limit": {
        "args": [
            "The nick who removed the limit"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes user limit", 
        "type": ""
    }, 
    "Channel Set Key": {
        "args": [
            "The nick of the person who set the key", 
            "The key"
        ], 
        "msg": "%C22*%O$t%C26$1%O sets channel keyword to %C24$2%O", 
        "type": ""
    }, 
    "Channel Set Limit": {
        "args": [
            "The nick of the person who set the limit", 
            "The limit"
        ], 
        "msg": "%C22*%O$t%C26$1%O sets channel limit to %C24$2%O", 
        "type": ""
    }, 
    "Channel UnBan": {
        "args": [
            "The nick of the person of did the unban'ing", 
            "The ban mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes ban on %C18$2%O", 
        "type": ""
    }, 
    "Channel UnQuiet": {
        "args": [
            "The nick of the person of did the unquiet'ing", 
            "The quiet mask"
        ], 
        "msg": "%C22*%O$t%C26$1%O removes quiet on %C18$2%O", 
        "type": ""
    }, 
    "Channel Voice": {
        "args": [
            "The nick of the person who did the voice'ing", 
            "The nick of the person who has been voice'ed"
        ], 
        "msg": "%C22*%O$t%C26$1%O gives voice to %C18$2%O", 
        "type": ""
    }, 
    "Connected": {
        "args": [], 
        "msg": "%C23*%O$tConnected. Now logging in.", 
        "type": ""
    }, 
    "Connecting": {
        "args": [
            "Host", 
            "IP", 
            "Port"
        ], 
        "msg": "%C23*%O$tConnecting to %C29$1%C (%C23$2:$3%O)", 
        "type": ""
    }, 
    "Connection Failed": {
        "args": [
            "Error"
        ], 
        "msg": "%C20*%O$tConnection failed (%C20$1%O)", 
        "type": ""
    }, 
    "DCC CHAT Abort": {
        "args": [
            "Nickname"
        ], 
        "msg": "%C23*%O$tDCC CHAT to %C18$1%O aborted.", 
        "type": ""
    }, 
    "DCC CHAT Connect": {
        "args": [
            "Nickname", 
            "IP address"
        ], 
        "msg": "%C24*%O$tDCC CHAT connection established to %C18$1%C %C30[%C24$2%C30]%O", 
        "type": ""
    }, 
    "DCC CHAT Failed": {
        "args": [
            "Nickname", 
            "IP address", 
            "Port", 
            "Error"
        ], 
        "msg": "%C20*%O$tDCC CHAT to %C18$1%O lost (%C20$4%O)", 
        "type": ""
    }, 
    "DCC CHAT Offer": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C24*%O$tReceived a DCC CHAT offer from %C18$1%O", 
        "type": ""
    }, 
    "DCC CHAT Offering": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C24*%O$tOffering DCC CHAT to %C18$1%O", 
        "type": ""
    }, 
    "DCC CHAT Reoffer": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C24*%O$tAlready offering CHAT to %C18$1%O", 
        "type": ""
    }, 
    "DCC Conection Failed": {
        "args": [
            "DCC Type", 
            "Nickname", 
            "Error"
        ], 
        "msg": "%C20*%O$tDCC $1 connect attempt to %C18$2%O failed (%C20$3%O)", 
        "type": ""
    }, 
    "DCC Generic Offer": {
        "args": [
            "DCC String", 
            "Nickname"
        ], 
        "msg": "%C23*%O$tReceived '%C23$1%C' from %C18$2%O", 
        "type": ""
    }, 
    "DCC Header": {
        "args": [], 
        "msg": "%C16,17 Type  To/From    Status  Size    Pos     File", 
        "type": ""
    }, 
    "DCC Malformed": {
        "args": [
            "Nickname", 
            "The Packet"
        ], 
        "msg": "%C20*%O$tReceived a malformed DCC request from %C18$1%O.%010%C23*%O$tContents of packet: %C23$2%O", 
        "type": ""
    }, 
    "DCC Offer": {
        "args": [
            "Filename", 
            "Nickname", 
            "Pathname"
        ], 
        "msg": "%C24*%O$tOffering '%C24$1%O' to %C18$2%O", 
        "type": ""
    }, 
    "DCC Offer Not Valid": {
        "args": [], 
        "msg": "%C23*%O$tNo such DCC offer.", 
        "type": ""
    }, 
    "DCC RECV Abort": {
        "args": [
            "Nickname", 
            "Filename"
        ], 
        "msg": "%C23*%O$tDCC RECV '%C23$2%O' to %C18$1%O aborted.", 
        "type": ""
    }, 
    "DCC RECV Complete": {
        "args": [
            "Filename", 
            "Destination filename", 
            "Nickname", 
            "CPS"
        ], 
        "msg": "%C24*%O$tDCC RECV '%C23$1%O' from %C18$3%O complete %C30[%C24$4%O cps%C30]%O", 
        "type": ""
    }, 
    "DCC RECV Connect": {
        "args": [
            "Nickname", 
            "IP address", 
            "Filename"
        ], 
        "msg": "%C24*%O$tDCC RECV connection established to %C18$1 %C30[%O%C24$2%C30]%O", 
        "type": ""
    }, 
    "DCC RECV Failed": {
        "args": [
            "Filename", 
            "Destination filename", 
            "Nickname", 
            "Error"
        ], 
        "msg": "%C20*%O$tDCC RECV '%C23$1%O' from %C18$3%O failed (%C20$4%O)", 
        "type": ""
    }, 
    "DCC RECV File Open Error": {
        "args": [
            "Filename", 
            "Error"
        ], 
        "msg": "%C20*%O$tDCC RECV: Cannot open '%C23$1%C' for writing (%C20$2%O)", 
        "type": ""
    }, 
    "DCC RESUME Request": {
        "args": [
            "Nickname", 
            "Filename", 
            "Position"
        ], 
        "msg": "%C24*%O$t%C18$1%C has requested to resume '%C23$2%C' from %C24$3%O.", 
        "type": ""
    }, 
    "DCC Rename": {
        "args": [
            "Old Filename", 
            "New Filename"
        ], 
        "msg": "%C23*%O$tThe file '%C24$1%C' already exists, saving it as '%C23$2%O' instead.", 
        "type": ""
    }, 
    "DCC SEND Abort": {
        "args": [
            "Nickname", 
            "Filename"
        ], 
        "msg": "%C23*%O$tDCC SEND '%C23$2%C' to %C18$1%O aborted.", 
        "type": ""
    }, 
    "DCC SEND Complete": {
        "args": [
            "Filename", 
            "Nickname", 
            "CPS"
        ], 
        "msg": "%C24*%O$tDCC SEND '%C23$1%C' to %C18$2%C complete %C30[%C24$3%C cps%C30]%O", 
        "type": ""
    }, 
    "DCC SEND Connect": {
        "args": [
            "Nickname", 
            "IP address", 
            "Filename"
        ], 
        "msg": "%C24*%O$tDCC SEND connection established to %C18$1 %C30[%O%C24$2%C30]%O", 
        "type": ""
    }, 
    "DCC SEND Failed": {
        "args": [
            "Filename", 
            "Nickname", 
            "Error"
        ], 
        "msg": "%C20*%O$tDCC SEND '%C23$1%C' to %C18$2%C failed (%C20$3%O)", 
        "type": ""
    }, 
    "DCC SEND Offer": {
        "args": [
            "Nickname", 
            "Filename", 
            "Size", 
            "IP address"
        ], 
        "msg": "%C24*%O$t%C18$1%C has offered '%C23$2%C' (%C24$3%O bytes)", 
        "type": ""
    }, 
    "DCC Stall": {
        "args": [
            "DCC Type", 
            "Filename", 
            "Nickname"
        ], 
        "msg": "%C20*%O$tDCC $1 '%C23$2%C' to %C18$3%O stalled, aborting.", 
        "type": ""
    }, 
    "DCC Timeout": {
        "args": [
            "DCC Type", 
            "Filename", 
            "Nickname"
        ], 
        "msg": "%C20*%O$tDCC $1 '%C23$2%C' to %C18$3%O timed out, aborting.", 
        "type": ""
    }, 
    "Delete Notify": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C24*%O$t%C18$1%O deleted from notify list.", 
        "type": ""
    }, 
    "Disconnected": {
        "args": [
            "Error"
        ], 
        "msg": "%C20*%O$tDisconnected (%C20$1%O)", 
        "type": ""
    }, 
    "Found IP": {
        "args": [
            "IP"
        ], 
        "msg": "%C24*%O$tFound your IP: %C30[%C24$1%C30]%O", 
        "type": ""
    }, 
    "Generic Message": {
        "args": [
            "Left message", 
            "Right message"
        ], 
        "msg": "$1$t$2", 
        "type": ""
    }, 
    "Ignore Add": {
        "args": [
            "Hostmask"
        ], 
        "msg": "%O%C18$1%O added to ignore list.", 
        "type": ""
    }, 
    "Ignore Changed": {
        "args": [
            "Hostmask"
        ], 
        "msg": "%OIgnore on %C18$1%O changed.", 
        "type": ""
    }, 
    "Ignore Footer": {
        "args": [], 
        "msg": "%C16,17", 
        "type": ""
    }, 
    "Ignore Header": {
        "args": [], 
        "msg": "%C16,17 Hostmask                  PRIV NOTI CHAN CTCP DCC  INVI UNIG", 
        "type": ""
    }, 
    "Ignore Remove": {
        "args": [
            "Hostmask"
        ], 
        "msg": "%O%C18$1%O removed from ignore list.", 
        "type": ""
    }, 
    "Ignorelist Empty": {
        "args": [], 
        "msg": "%OIgnore list is empty.", 
        "type": ""
    }, 
    "Invite": {
        "args": [
            "Channel Name"
        ], 
        "msg": "%C20*%O$tCannot join %C22$1%C (%C20Channel is invite only%O)", 
        "type": ""
    }, 
    "Invited": {
        "args": [
            "Channel Name", 
            "Nick of person who invited you", 
            "Server Name"
        ], 
        "msg": "%C24*%O$tYou have been invited to %C22$1%O by %C18$2%O (%C29$3%O)", 
        "type": ""
    }, 
    "Join": {
        "args": [
            "The nick of the joining person", 
            "The channel being joined", 
            "The host of the person"
        ], 
        "msg": "%C23*$t$1 ($3) has joined", 
        "type": ""
    }, 
    "Keyword": {
        "args": [
            "Channel Name"
        ], 
        "msg": "%C20*%O$tCannot join %C22$1%C (%C20Requires keyword%O)", 
        "type": ""
    }, 
    "Kick": {
        "args": [
            "The nickname of the kicker", 
            "The person being kicked", 
            "The channel", 
            "The reason"
        ], 
        "msg": "%C22*%O$t%C26$1%C has kicked %C18$2%C from %C22$3%C (%C24$4%O)", 
        "type": ""
    }, 
    "Killed": {
        "args": [
            "Nickname", 
            "Reason"
        ], 
        "msg": "%C19*%O$t%C19You have been killed by %C26$1%C (%C20$2%O)", 
        "type": ""
    }, 
    "MOTD Skipped": {
        "args": [], 
        "msg": "%C29*%O$t%C29MOTD Skipped%O", 
        "type": ""
    }, 
    "Message Send": {
        "args": [
            "Receiver", 
            "Message"
        ], 
        "msg": "%O>%C18$1%C<%O$t$2", 
        "type": ""
    }, 
    "Motd": {
        "args": [
            "Text", 
            "Server Name", 
            "Raw Numeric or Identifier"
        ], 
        "msg": "%C29*%O$t%C29$1%O", 
        "type": ""
    }, 
    "Nick Clash": {
        "args": [
            "Nickname in use", 
            "Nick being tried"
        ], 
        "msg": "%C23*%O$t%C28$1%C is already in use. Retrying with %C18$2%O...", 
        "type": ""
    }, 
    "Nick Erroneous": {
        "args": [
            "Nickname in use", 
            "Nick being tried"
        ], 
        "msg": "%C23*%O$t%C28$1%C is erroneous. Retrying with %C18$2%O...", 
        "type": ""
    }, 
    "Nick Failed": {
        "args": [], 
        "msg": "%C20*%O$tNickname is erroneous or already in use. Use /NICK to try another.", 
        "type": ""
    }, 
    "No DCC": {
        "args": [], 
        "msg": "%C20*%O$tNo such DCC.", 
        "type": ""
    }, 
    "No Running Process": {
        "args": [], 
        "msg": "%C23*%O$tNo process is currently running", 
        "type": ""
    }, 
    "Notice": {
        "args": [
            "Who it's from", 
            "The message"
        ], 
        "msg": "%O-%C18$1%O-$t$2", 
        "type": ""
    }, 
    "Notice Send": {
        "args": [
            "Receiver", 
            "Message"
        ], 
        "msg": "%O->%C18$1%O<-$t$2", 
        "type": ""
    }, 
    "Notify Away": {
        "args": [
            "Nickname", 
            "Away Reason"
        ], 
        "msg": "%C23*%O$tNotify: %C18$1%C is away (%C24$2%O)", 
        "type": ""
    }, 
    "Notify Back": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C23*%O$tNotify: %C18$1%C is back", 
        "type": ""
    }, 
    "Notify Empty": {
        "args": [], 
        "msg": "$tNotify list is empty.", 
        "type": ""
    }, 
    "Notify Header": {
        "args": [], 
        "msg": "%C16,17  Notify List", 
        "type": ""
    }, 
    "Notify Number": {
        "args": [
            "Number of notify items"
        ], 
        "msg": "%C23*%O$t%C23$1%O users in notify list.", 
        "type": ""
    }, 
    "Notify Offline": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C23*%O$tNotify: %C18$1%C is offline (%C29$3%O)", 
        "type": ""
    }, 
    "Notify Online": {
        "args": [
            "Nickname", 
            "Server Name", 
            "Network"
        ], 
        "msg": "%C23*%O$tNotify: %C18$1%C is online (%C29$3%O)", 
        "type": ""
    }, 
    "Open Dialog": {
        "args": [], 
        "msg": "", 
        "type": ""
    }, 
    "Part": {
        "args": [
            "The nick of the person leaving", 
            "The host of the person", 
            "The channel"
        ], 
        "msg": "%C24*$t$1 ($2) has left", 
        "type": ""
    }, 
    "Part with Reason": {
        "args": [
            "The nick of the person leaving", 
            "The host of the person", 
            "The channel", 
            "The reason"
        ], 
        "msg": "%C24*$t$1 ($2) has left ($4)", 
        "type": ""
    }, 
    "Ping Reply": {
        "args": [
            "Who it's from", 
            "The time in x.x format (see below)"
        ], 
        "msg": "%C24*%O$tPing reply from %C18$1%C: %C24$2%O second(s)", 
        "type": ""
    }, 
    "Ping Timeout": {
        "args": [
            "Seconds"
        ], 
        "msg": "%C20*%O$tNo ping reply for %C24$1%O seconds, disconnecting.", 
        "type": ""
    }, 
    "Private Action": {
        "args": [
            "Nickname", 
            "The message", 
            "Identified text"
        ], 
        "msg": "%C18**$t$3$1%O $2 %C18**", 
        "type": ""
    }, 
    "Private Action to Dialog": {
        "args": [
            "Nickname", 
            "The message", 
            "Identified text"
        ], 
        "msg": "%C18*$t$3$1%O $2", 
        "type": ""
    }, 
    "Private Message": {
        "args": [
            "Nickname", 
            "The message", 
            "Identified text"
        ], 
        "msg": "%C18*%C18$3$1*%O$t$2", 
        "type": ""
    }, 
    "Private Message to Dialog": {
        "args": [
            "Nickname", 
            "The message", 
            "Identified text"
        ], 
        "msg": "%C18%H<%H$3$1%H>%H%O$t$2", 
        "type": ""
    }, 
    "Process Already Running": {
        "args": [], 
        "msg": "%C24*%O$tA process is already running", 
        "type": ""
    }, 
    "Quit": {
        "args": [
            "Nick", 
            "Reason", 
            "Host"
        ], 
        "msg": "%C24*$t$1 has quit ($2)", 
        "type": ""
    }, 
    "Raw Modes": {
        "args": [
            "Nickname", 
            "Modes string"
        ], 
        "msg": "%C24*%O$t%C26$1%C sets modes %C30[%C24$2%C30]%O", 
        "type": ""
    }, 
    "Receive Wallops": {
        "args": [
            "Nickname", 
            "The message", 
            "Identified text"
        ], 
        "msg": "%O-%C29$1/Wallops%O-$t$2", 
        "type": ""
    }, 
    "Resolving User": {
        "args": [
            "Nickname", 
            "Hostname"
        ], 
        "msg": "%C24*%O$tLooking up IP number for %C18$1%O...", 
        "type": ""
    }, 
    "SASL Authenticating": {
        "args": [
            "Username"
        ], 
        "msg": "%C23*%O$tAuthenticating via SASL as %C18$1%O", 
        "type": ""
    }, 
    "SASL Response": {
        "args": [
            "Server Name", 
            "Raw Numeric or Identifier", 
            "Username", 
            "Message"
        ], 
        "msg": "%C29*%O$t$4", 
        "type": ""
    }, 
    "SSL Message": {
        "args": [
            "Text", 
            "Server Name"
        ], 
        "msg": "%C29*%O$t$1", 
        "type": ""
    }, 
    "Server Connected": {
        "args": [], 
        "msg": "%C29*%O$tConnected.", 
        "type": ""
    }, 
    "Server Error": {
        "args": [
            "Text"
        ], 
        "msg": "%C29*%O$t%C20$1%O", 
        "type": ""
    }, 
    "Server Lookup": {
        "args": [
            "Server Name"
        ], 
        "msg": "%C29*%O$tLooking up %C29$1%O", 
        "type": ""
    }, 
    "Server Notice": {
        "args": [
            "Text", 
            "Server Name", 
            "Raw Numeric or Identifier"
        ], 
        "msg": "%C29*%O$t$1", 
        "type": ""
    }, 
    "Server Text": {
        "args": [
            "Text", 
            "Server Name", 
            "Raw Numeric or Identifier"
        ], 
        "msg": "%C29*%O$t$1", 
        "type": ""
    }, 
    "Stop Connection": {
        "args": [
            "PID"
        ], 
        "msg": "%C23*%O$tStopped previous connection attempt (%C24$1%O)", 
        "type": ""
    }, 
    "Topic": {
        "args": [
            "Channel", 
            "Topic"
        ], 
        "msg": "%C22*%O$tTopic for %C22$1%C is: $2%O", 
        "type": ""
    }, 
    "Topic Change": {
        "args": [
            "Nick of person who changed the topic", 
            "Topic", 
            "Channel"
        ], 
        "msg": "%C22*%O$t%C26$1%C has changed the topic to: $2%O", 
        "type": ""
    }, 
    "Topic Creation": {
        "args": [
            "The channel", 
            "The creator", 
            "The time"
        ], 
        "msg": "%C22*%O$tTopic for %C22$1%C set by %C26$2%C (%C24$3%O)", 
        "type": ""
    }, 
    "Unknown Host": {
        "args": [], 
        "msg": "%C20*%O$tUnknown host. Maybe you misspelled it?", 
        "type": ""
    }, 
    "User Limit": {
        "args": [
            "Channel Name"
        ], 
        "msg": "%C20*%O$tCannot join %C22$1%C (%C20User limit reached%O)", 
        "type": ""
    }, 
    "Users On Channel": {
        "args": [
            "Channel Name", 
            "Users"
        ], 
        "msg": "%C22*%O$tUsers on %C22$1%C: %C24$2%O", 
        "type": ""
    }, 
    "WhoIs Authenticated": {
        "args": [
            "Nickname", 
            "Message", 
            "Account"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O $2 %C18$3%O", 
        "type": ""
    }, 
    "WhoIs Away Line": {
        "args": [
            "Nickname", 
            "Away reason"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%C is away %C30(%C23$2%O%C30)%O", 
        "type": ""
    }, 
    "WhoIs Channel/Oper Line": {
        "args": [
            "Nickname", 
            "Channel Membership/\"is an IRC operator\""
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O $2", 
        "type": ""
    }, 
    "WhoIs End": {
        "args": [
            "Nickname"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28] %OEnd of WHOIS list.", 
        "type": ""
    }, 
    "WhoIs Identified": {
        "args": [
            "Nickname", 
            "Message", 
            "Numeric"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O $2", 
        "type": ""
    }, 
    "WhoIs Idle Line": {
        "args": [
            "Nickname", 
            "Idle time"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O idle %C23$2%O", 
        "type": ""
    }, 
    "WhoIs Idle Line with Signon": {
        "args": [
            "Nickname", 
            "Idle time", 
            "Signon time"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O idle %C23$2%O, signon: %C23$3%O", 
        "type": ""
    }, 
    "WhoIs Name Line": {
        "args": [
            "Nickname", 
            "Username", 
            "Host", 
            "Full name"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28] %C30(%C24$2@$3%C30)%O: %C18$4%O", 
        "type": ""
    }, 
    "WhoIs Real Host": {
        "args": [
            "Nickname", 
            "Real user@host", 
            "Real IP", 
            "Message"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O Real Host: %C23$2%O, Real IP: %C30[%C23$3%C30]%O", 
        "type": ""
    }, 
    "WhoIs Server Line": {
        "args": [
            "Nickname", 
            "Server Information"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O %C29$2%O", 
        "type": ""
    }, 
    "WhoIs Special": {
        "args": [
            "Nickname", 
            "Message", 
            "Numeric"
        ], 
        "msg": "%C23*%O$t%C28[%C18$1%C28]%O $2", 
        "type": ""
    }, 
    "You Join": {
        "args": [
            "The nick of the joining person", 
            "The channel being joined", 
            "The host of the person"
        ], 
        "msg": "%C19*%O$tNow talking on %C22$2%O", 
        "type": ""
    }, 
    "You Kicked": {
        "args": [
            "The person being kicked", 
            "The channel", 
            "The nickname of the kicker", 
            "The reason"
        ], 
        "msg": "%C19*%O$tYou have been kicked from %C22$2%C by %C26$3%O (%C20$4%O)", 
        "type": ""
    }, 
    "You Part": {
        "args": [
            "The nick of the person leaving", 
            "The host of the person", 
            "The channel"
        ], 
        "msg": "%C19*%O$tYou have left channel %C22$3%O", 
        "type": ""
    }, 
    "You Part with Reason": {
        "args": [
            "The nick of the person leaving", 
            "The host of the person", 
            "The channel", 
            "The reason"
        ], 
        "msg": "%C19*%O$tYou have left channel %C22$3%C (%C24$4%O)", 
        "type": ""
    }, 
    "Your Action": {
        "args": [
            "Nickname", 
            "The action", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C20*$t%B$1%B %C30$2%O", 
        "type": ""
    }, 
    "Your Invitation": {
        "args": [
            "Nick of person who have been invited", 
            "Channel Name", 
            "Server Name"
        ], 
        "msg": "%C20*%O$tYou've invited %C18$1%O to %C22$2%O (%C24$3%O)", 
        "type": ""
    }, 
    "Your Message": {
        "args": [
            "Nickname", 
            "The text", 
            "Mode char", 
            "Identified text"
        ], 
        "msg": "%C20%H<%H$4$1%H>%H%O%C30$t$2%O", 
        "type": ""
    }, 
    "Your Nick Changing": {
        "args": [
            "Old nickname", 
            "New nickname"
        ], 
        "msg": "%C20*%O$tYou are now known as %C18$2%O", 
        "type": ""
    }
};