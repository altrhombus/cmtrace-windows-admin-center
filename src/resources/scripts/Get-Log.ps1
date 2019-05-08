# My sincerest apologies to whoever reviews this code
# This "works" but gets a -5 out of 10 for performance.

$traceOutput = New-Object System.Collections.ArrayList

Get-Content C:\Windows\CCM\Logs\UpdatesHandler.log | ForEach-Object {
    $traceEntry = $_ -split ']LOG]!><time="'
    $traceTime = $traceEntry[1] -split '" date="'
    $traceDate = $traceTime[1] -split '" component="'
    $traceComponent = $traceDate[1] -split '" context="'
    $traceContext = $traceComponent[1] -split '" type="'
    $traceType = $traceContext[1] -split '" thread="'
    $traceThread = $traceType[1] -split '" file="'
    $traceFile = $traceThread[1] -split '">'

    $traceOutput.Add([PSCustomObject]@{
        'Entry' = $traceEntry[0].TrimStart("<![LOG[")
        'Time' = $traceTime[0]
        'Date' = $traceDate[0]
        'Component' = $traceComponent[0]
        'Context' = $traceContext[0]
        'Type' = $traceType[0]
        'Thread' = $traceThread[0]
        'File' = $traceFile[0]
    }) | Out-Null
}

$traceOutput