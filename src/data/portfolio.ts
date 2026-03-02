export const siteConfig = {
  name: "Taylor Harris",
  title: "AI-Assisted Developer",
  tagline: "Building intelligent systems by focusing on methods and logic — not just syntax.",
  email: "alex@example.com",
  github: "https://github.com/example",
  linkedin: "https://linkedin.com/in/example",
};

export const approaches = [
  {
    id: "problem-decomposition",
    title: "Problem Decomposition",
    description:
      "Breaking complex challenges into clearly scoped sub-problems, mapping dependencies, and solving each layer with targeted precision before integrating the solution.",
    icon: "Layers",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "iterative-reasoning",
    title: "Iterative Reasoning",
    description:
      "Hypothesis-driven development: form a model of the problem, test assumptions cheaply, revise, and repeat — treating every sprint as a mini-experiment.",
    icon: "RefreshCw",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "ai-augmentation",
    title: "AI Augmentation",
    description:
      "Pairing human architectural thinking with LLM capabilities to accelerate exploration, generate and evaluate alternatives, and surface edge cases early.",
    icon: "Cpu",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "systems-thinking",
    title: "Systems Thinking",
    description:
      "Modelling the full feedback loop — from user intent through data pipelines to outputs — to anticipate emergent behaviour and build for resilience.",
    icon: "Network",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "abstraction-layers",
    title: "Abstraction & Interfaces",
    description:
      "Designing clean boundaries between concerns so each layer can evolve independently, keeping complexity local and collaboration friction low.",
    icon: "Boxes",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "evidence-driven",
    title: "Evidence-Driven Decisions",
    description:
      "Anchoring design choices in measurable signals — latency budgets, error rates, user paths — rather than intuition or convention alone.",
    icon: "BarChart2",
    color: "from-lime-500 to-green-600",
  },
];

export const caseStudies = [
  {
    id: "dhhs-sharepoint-sync",
    title: "DHHS SharePoint Data Sync & Concurrency Automator",
    summary:
      "Built a VBA automation tool for the Department of Health and Human Services that eliminated a daily workflow bottleneck — replacing error-prone manual data entry into a shared SharePoint workbook with a safe, smart, fully-automated sync script.",
    challenge:
      "My team processed Medicaid applications and tracked work daily in local Excel workbooks. Pushing that data to a shared master file on SharePoint required manual copy-paste, was riddled with duplicate entries when workers forgot to check for existing records, and constantly failed with file-lock errors when multiple team members tried to update the master file at the same time.",
    approach:
      "I wrote a VBA macro that prompts the worker for the target date, then safely checks out the SharePoint file using Workbooks.CanCheckOut before opening it — preventing collisions with other users. A duplicate-detection loop scans every existing row on the target sheet, matching on both MC number and date, and skips exact duplicates while intelligently overwriting only the 'Action Taken' column if the status has changed. After pushing all records, a Safe Check-In Protocol verifies the file can be returned (wbTarget.CanCheckIn), commits the changes with an audit comment, and falls back to a local save with a clear user alert if SharePoint refuses the check-in. The script also dynamically routes data to the correct monthly tab across both workbooks using the date the worker supplies at runtime.",
    outcome:
      "Eliminated hours of daily manual data entry · Removed duplicate records from the master tracker · Bypassed SharePoint file-lock errors that previously blocked the whole team",
    tags: ["VBA", "Microsoft Excel", "SharePoint", "Automation", "Concurrency"],
    accent: "emerald",
    year: "2024",
    codeSnippet: `Sub PushNonMagiDataToSharePoint()
    ' 1. Hardcoded Worker Name Constant
    Const WorkerName As String = "Taylor Harris"
    
    Dim wbSource As Workbook, wbTarget As Workbook
    Dim wsSource As Worksheet, wsTarget As Worksheet
    Dim targetURL As String, searchDate As String, sheetMonth As String
    Dim targetRow As Long, sourceRow As Long, chkRow As Long, foundRow As Long
    Dim foundCell As Range
    Dim formattedDate As String, mcValue As String
    Dim recordsAdded As Integer, recordsUpdated As Integer, recordsSkipped As Integer
    
    ' Initialize counters for the final summary
    recordsAdded = 0
    recordsUpdated = 0
    recordsSkipped = 0
    Set wbSource = ThisWorkbook
    
    ' 2. Prompt for the specific date header to push
    searchDate = InputBox("Enter the date header exactly as it appears in Column A (e.g., 3-Mar):", "Select Date to Push", Format(Date, "d-Mmm"))
    If searchDate = "" Then Exit Sub ' Cancel if the user closes the box
    
    ' Figure out the abbreviated month name (e.g., "Mar") and lock in date format
    On Error Resume Next
    sheetMonth = Format(CDate(searchDate), "mmm")
    formattedDate = Format(CDate(searchDate), "m/d/yyyy") 
    On Error GoTo 0
    
    If sheetMonth = "" Then
        MsgBox "Couldn't determine the month. Make sure you enter a valid date format.", vbExclamation
        Exit Sub
    End If
    
    ' Set up Source (Sender) Sheet
    On Error Resume Next
    Set wsSource = wbSource.Sheets(sheetMonth)
    On Error GoTo 0
    
    If wsSource Is Nothing Then
        MsgBox "Could not find a tab named '" & sheetMonth & "' in your sender workbook.", vbExclamation
        Exit Sub
    End If
    
    ' Find the date header block
    Set foundCell = wsSource.Columns("A").Find(What:=searchDate, LookIn:=xlValues, LookAt:=xlWhole)
    If foundCell Is Nothing Then
        MsgBox "Could not find the date header: " & searchDate & " on the " & sheetMonth & " sheet.", vbExclamation
        Exit Sub
    End If
    
    ' 3. The SharePoint URL for the shared master tracking file
    targetURL = "https://[org].sharepoint.com/sites/[Team]/Shared%20Documents/NM%20Initial%20Daily%20tracking.xlsx"
    
    Application.ScreenUpdating = False
    
    ' 4. Verify the file can be checked out from the server
    If Workbooks.CanCheckOut(targetURL) Then
        
        ' Check out and open the Recipient Workbook
        Workbooks.CheckOut targetURL
        Set wbTarget = Workbooks.Open(targetURL)
        
        ' Set up Target (Recipient) Sheet
        On Error Resume Next
        Set wsTarget = wbTarget.Sheets(sheetMonth)
        On Error GoTo 0
        
        If wsTarget Is Nothing Then
            MsgBox "Could not find a tab named '" & sheetMonth & "' in the recipient workbook.", vbExclamation
            wbTarget.CheckIn SaveChanges:=False
            Application.ScreenUpdating = True
            Exit Sub
        End If
        
        ' Find the next empty row, ensuring it starts at row 11 or lower
        targetRow = wsTarget.Cells(wsTarget.Rows.Count, "A").End(xlUp).Row + 1
        If targetRow < 11 Then targetRow = 11
        
        ' 5. Loop and Push/Update Data
        sourceRow = foundCell.Row + 1
        
        Do While sourceRow <= wsSource.Cells(wsSource.Rows.Count, "A").End(xlUp).Row
            ' Stop logic: Hitting the next day's header
            If wsSource.Cells(sourceRow, "A").Value <> "" And wsSource.Cells(sourceRow, "B").Value = "" Then
                Exit Do
            End If
            
            ' Push/Update logic
            If wsSource.Cells(sourceRow, "A").Value <> "" And wsSource.Cells(sourceRow, "B").Value <> "" Then
                
                mcValue = wsSource.Cells(sourceRow, "A").Value
                foundRow = 0 ' Reset for each record
                
                ' DUPLICATE CHECKER: Scan the target sheet for this MC on this Date
                For chkRow = 11 To targetRow - 1
                    If wsTarget.Cells(chkRow, "C").Value = mcValue And _
                       Format(wsTarget.Cells(chkRow, "B").Value, "m/d/yyyy") = formattedDate Then
                        foundRow = chkRow
                        Exit For
                    End If
                Next chkRow
                
                If foundRow = 0 Then
                    ' It's new! Map and push the data.
                    wsTarget.Cells(targetRow, "A").Value = WorkerName                                       
                    wsTarget.Cells(targetRow, "B").Value = formattedDate            
                    wsTarget.Cells(targetRow, "C").Value = mcValue             
                    wsTarget.Cells(targetRow, "D").Value = wsSource.Cells(sourceRow, "B").Value             
                    wsTarget.Cells(targetRow, "E").Value = wsSource.Cells(sourceRow, "C").Value             
                    wsTarget.Cells(targetRow, "G").Value = wsSource.Cells(sourceRow, "E").Value             
                    
                    targetRow = targetRow + 1 
                    recordsAdded = recordsAdded + 1
                Else
                    ' It exists. Check if Action Taken (Col E in source, Col G in target) changed.
                    If wsTarget.Cells(foundRow, "G").Value <> wsSource.Cells(sourceRow, "E").Value Then
                        ' Overwrite the old Action Taken
                        wsTarget.Cells(foundRow, "G").Value = wsSource.Cells(sourceRow, "E").Value
                        recordsUpdated = recordsUpdated + 1
                    Else
                        ' Exact match, nothing to change. Skip it.
                        recordsSkipped = recordsSkipped + 1
                    End If
                End If
                
            End If
            
            sourceRow = sourceRow + 1
        Loop
        
        ' 6. Safe Check-In Protocol
        wbTarget.Activate ' Force the recipient file to be the active window
        DoEvents          ' Give the network a microsecond to catch up
        
        ' Verify Excel recognizes the lock and is permitted to check it in
        If wbTarget.CanCheckIn Then
            ' Check in WITH saving (this prevents the server conflict)
            wbTarget.CheckIn SaveChanges:=True, Comments:="Pushed Non-MAGI data. Added: " & recordsAdded & ", Updated: " & recordsUpdated
            
            Application.ScreenUpdating = True
            MsgBox "Success! Tracking sheet updated and checked back in safely." & vbCrLf & vbCrLf & _
                   "New Records Added: " & recordsAdded & vbCrLf & _
                   "Existing Records Updated: " & recordsUpdated & vbCrLf & _
                   "Duplicates Skipped: " & recordsSkipped, vbInformation
        Else
            ' Fallback if SharePoint is being stubborn: Save locally, LEAVE OPEN, and alert user
            wbTarget.Save 
            Application.ScreenUpdating = True
            MsgBox "Data was successfully pushed and SAVED, but SharePoint wouldn't release the lock automatically." & vbCrLf & vbCrLf & _
                   "The file has been left open for you. Please manually click 'Check In' from the Excel ribbon." & vbCrLf & vbCrLf & _
                   "New Records Added: " & recordsAdded & vbCrLf & _
                   "Existing Records Updated: " & recordsUpdated & vbCrLf & _
                   "Duplicates Skipped: " & recordsSkipped, vbExclamation
        End If
        
    Else
        ' If a coworker has it locked at the very beginning, stop and alert
        Application.ScreenUpdating = True
        MsgBox "The tracking sheet is currently checked out by another user. Please try again in a few minutes.", vbExclamation
    End If
    
End Sub`,
  },
  {
    id: "openfrontio-contributions",
    title: "Open Source Contributions: OpenFrontIO",
    summary:
      "Delivered a series of high-impact pull requests for OpenFrontIO, establishing core architectural patterns for mobile, fixing rendering performance, and streamlining the competitive player experience.",
    challenge:
      "The game client suffered from architectural fragmentation with ad hoc environment detection, rendering performance drops with non-square sprites, and UX friction forcing players to manually navigate back to the menu to requeue for ranked matches.",
    approach:
      "To establish a scalable architecture for mobile (PR #3325), consolidated platform, environment, and viewport detection into a single tested utility, replacing duplicated regex checks across the client. For rendering performance (PR #3320), corrected drawImage dimensions and canvas clearance boundaries for non-square unit scaling. To improve player retention and UX (PR #3121), implemented a 'Play Again' button in the post-game modal for Ranked 1v1s, seamlessly routing players back into the matchmaking queue via URL parameters, complete with state management and unit tests.",
    outcome: "Laid a stable foundation for mobile milestones · Improved client rendering pipeline · Streamlined the ranked competitive loop for players",
    tags: ["Open Source", "Game Dev", "TypeScript", "React", "Architecture"],
    accent: "violet",
    year: "2026",
  },
  {
    id: "lifeguard-discord-bot",
    title: "Lifeguard: Dashboard-less Community Bot",
    summary:
      "Engineered a modular, database-backed Discord bot that centralizes community management, structured feedback workflows, and gaming integrations natively within Discord, eliminating the need for external web dashboards.",
    challenge:
      "Gaming communities often rely on fragmented, single-purpose bots that require leaving Discord for external dashboards, creating friction for sever management, handling peer feedback tasks, and wrangling cross-time zone collaboration.",
    approach:
      "Built a highly modular architecture in Python using discord.py and Firebase/Firestore, allowing server admins to toggle robust features—like a multi-step content review wizard, auto-cleaning voice lobbies, and game market APIs—entirely through interactive native Discord slash commands and UI components.",
    outcome: "Centralized multiple external bot functions into one seamless tool · Enabled robust in-Discord community content review pipelines · Provided seamless timezone coordination for global members via a robust impersonation engine",
    tags: ["Python", "discord.py", "Firebase", "Bot Architecture", "UX Design"],
    accent: "cyan",
    year: "2025",
  },
];

export const skills = [
  { category: "Reasoning & Design", items: ["System Architecture", "Algorithm Design", "Data Modelling", "API Design"] },
  { category: "AI / ML", items: ["LLM Fine-tuning", "RAG Pipelines", "Prompt Engineering", "MLOps"] },
  { category: "Engineering", items: ["TypeScript / Python", "Next.js / FastAPI", "PostgreSQL / Redis", "Docker / CI-CD"] },
  { category: "Practices", items: ["Test-Driven Development", "Observability", "Iterative Delivery", "Documentation"] },
];
